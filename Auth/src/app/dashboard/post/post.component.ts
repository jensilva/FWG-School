import { Component, Input } from '@angular/core';
import { Post } from 'app/interface/post.interface';
import { get } from 'lodash';
import { PostService } from './post.service';




@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {
    public isFavorite: boolean;
    private _post: Post;

    @Input()
    public set post(post: Post) {
        this._post = post;
        this.isFavorite = get(post, 'post.interaction.like.checked', false);
    }

    public get post(): Post {
        return this._post;
    }

    constructor(private postService: PostService) {}

    public toggleFavorite(post: Post) {
        this.postService.toggleFavorite(post).subscribe(() => {
            this.isFavorite = !this.isFavorite;
        });
    }

}
