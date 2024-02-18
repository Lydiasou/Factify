// PostText.ts

// Enum pour le premier ensemble de texte de post

const getAvatarPath = (author: string) => {
  switch (author) {
    case "JohnDoe123":
      return "/images/avatar2.png";
    case "Alice456":
      return "/images/avatar1.png";
    case "Emily789":
      return "/images/avatar1.png";
    case "David101":
      return "/images/avatar2.png";
    case "Sophia222":
      return "/images/avatar1.png";
    default:
      return "/images/avatar1.png"; // Par défaut, l'avatar 1 est utilisé
  }
};

enum PostText1 {
  USER_NAME = "JohnDoe123",
  AVATAR_USER = "https://kitt.lewagon.com/placeholder/users/cveneziani",
  USER_POST = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

// Enum pour le deuxième ensemble de texte de post
enum PostText2 {
  USER_NAME = "Alice456",
  AVATAR_USER = "https://kitt.lewagon.com/placeholder/users/cveneziani",
  USER_POST = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}

// Enum pour le troisième ensemble de texte de post
enum PostText3 {
  USER_NAME = "Emily789",
  AVATAR_USER = "https://kitt.lewagon.com/placeholder/users/arthur-littm",
  USER_POST = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
}

// Enum pour le quatrième ensemble de texte de post
enum PostText4 {
  USER_NAME = "David101",
  AVATAR_USER = "https://kitt.lewagon.com/placeholder/users/cveneziani",
  USER_POST = "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
}

// Enum pour le cinquième ensemble de texte de post
enum PostText5 {
  USER_NAME = "Sophia222",
  AVATAR_USER = "https://kitt.lewagon.com/placeholder/users/arthur-littm",
  USER_POST = "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
}

export { PostText1, PostText2, PostText3, PostText4, PostText5 };
