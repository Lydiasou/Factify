// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialNetwork {
    struct Post {
        address author;
        string content;
        uint256 timestamp;
        bool isFake;
    }

    mapping(uint256 => Post) public posts;
    uint256 public postCount;

    mapping(address => uint256) public balances; // Solde de test Sepolia des utilisateurs
    mapping(uint256 => mapping(address => bool)) public reportedPosts; // Mapping pour suivre les posts déjà signalés par un utilisateur

    event PostCreated(uint256 postId, address author, string content, uint256 timestamp, bool isFake);
    event PostReported(uint256 postId, address reporter, bool isFake, bool success);

    constructor() {
        postCount = 0;
    }

    // Fonction pour créer un nouveau post avec un contenu, un auteur, une date et un indicateur de fake
    function createPost(string memory _content) public {
        postCount++;
        bool isFakeValue = (postCount % 2 == 0); // Alternance entre true et false pour isFake
        uint256 timestamp = block.timestamp; // Utilisation du timestamp actuel
        posts[postCount] = Post(msg.sender, _content, timestamp, isFakeValue);
        emit PostCreated(postCount, msg.sender, _content, timestamp, isFakeValue);
    }

     function reportPost(uint256 _postId) public {
        require(_postId <= postCount, "Invalid post ID");
        require(!reportedPosts[_postId][msg.sender], "Post already reported by user");

        bool success;
        if (posts[_postId].isFake) {
            balances[msg.sender] += 0.01 ether; // Récompense de 0,01 eth pour avoir signalé un post fake
            success = true;
        } else {
            if (balances[msg.sender] >= 0.01 ether) { // Vérifie que l'utilisateur a suffisamment de solde pour payer la pénalité
                balances[msg.sender] -= 0.01 ether; // Pénalité de 0,01 eth pour avoir signalé un post non fake
                success = true;
            } else {
                success = false;
            }
        }

        reportedPosts[_postId][msg.sender] = true; // Marque le post comme signalé par l'utilisateur
        emit PostReported(_postId, msg.sender, posts[_postId].isFake, success);
    }
}


// Dans ce contrat :

// - La fonction `createPost` prend en paramètre le contenu du post à créer.
// - Le contrat utilise la variable `block.timestamp` pour récupérer le timestamp actuel.
// - L'attribut `isFake` est automatiquement attribué en alternant entre `true` et `false` en fonction de l'index du post.
// - L'événement `PostCreated` est émis à chaque création de post, fournissant des informations sur le nouveau post créé.
