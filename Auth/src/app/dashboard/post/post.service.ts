import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'app/interface/post.interface';
import {environment} from '@env';
import { get, set } from 'lodash';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    constructor(private http: HttpClient) {}

    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.service}/posts`);
    }

    public toggleFavorite(post: Post): Observable<void> {
        const {id} = post;
        const isFavorite = get(post, 'post.interaction.like.checked', false);
        set(post, 'interaction.like.checked', !isFavorite);
        return this.http.put<void>(`${environment.service}/posts/${id}`, post);
    }
}
