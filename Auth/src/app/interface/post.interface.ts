
export interface PostImage {
    src: string;
    alt?: string;
}

export interface PostAuthor {
    id: number;
    username: string;
}

export interface PostInteractions {
    like?: Interaction;
    comments?: Interaction;
    share?: Interaction;
}

export interface Interaction {
    counter?: number;
    checked?: boolean;
}

export interface Post {
    id: number;
    title: string;
    text: string;
    image?: PostImage;
    author: PostAuthor;
    interaction?: PostInteractions;
}
