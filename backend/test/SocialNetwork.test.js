const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SocialNetwork Contract", function () {
  let SocialNetwork;
  let socialNetwork;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    SocialNetwork = await ethers.getContractFactory("SocialNetwork");
    socialNetwork = await SocialNetwork.deploy();
    await socialNetwork.deployed();
  });

  describe("createPost function", function () {
    it("Should create a new post", async function () {
      const content = "This is a test post.";
      await socialNetwork.connect(addr1).createPost(content);
      const post = await socialNetwork.posts(1);
      expect(post.content).to.equal(content);
      expect(post.author).to.equal(addr1.address);
    });

    it("Should emit a PostCreated event", async function () {
      const content = "This is another test post.";
      await expect(socialNetwork.connect(addr1).createPost(content))
        .to.emit(socialNetwork, "PostCreated")
        .withArgs(1, addr1.address, content);
    });
  });

  describe("reportPost function", function () {
    beforeEach(async function () {
      const content = "Fake post";
      await socialNetwork.connect(addr1).createPost(content);
    });

    it("Should report a fake post", async function () {
      await socialNetwork.connect(addr2).reportPost(1);
      const reportedPost = await socialNetwork.reportedPosts(1, addr2.address);
      expect(reportedPost).to.be.true;
    });

    it("Should not allow duplicate reports from the same user", async function () {
      await socialNetwork.connect(addr2).reportPost(1);
      await expect(socialNetwork.connect(addr2).reportPost(1)).to.be.revertedWith(
        "Post already reported by user"
      );
    });

    it("Should reward user for reporting a fake post", async function () {
      await socialNetwork.connect(addr2).reportPost(1);
      const balance = await socialNetwork.balances(addr2.address);
      expect(balance).to.equal(ethers.utils.parseEther("0.01"));
    });

    it("Should penalize user for reporting a non-fake post without sufficient balance", async function () {
      const content = "Non-fake post";
      await socialNetwork.connect(addr1).createPost(content);
      await socialNetwork.connect(addr2).reportPost(2); // Report non-fake post
      const balance = await socialNetwork.balances(addr2.address);
      expect(balance).to.equal(ethers.utils.parseEther("0"));
    });
  });
});
