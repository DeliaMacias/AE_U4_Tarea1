import { TestBed } from '@angular/core/testing';
import { PostsService } from '../service/post.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });
});
