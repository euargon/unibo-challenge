export class Post {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;

    constructor(post: any) {
        this.userId = post.userId;
        this.id = post.id;
        this.title = post.title;
        this.body = post.body;
    }
}
