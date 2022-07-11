import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'
import { FeedPost } from '../models/feed.model'
import { FeedPostEntity } from '../entities/post.entity'
import { from, Observable } from 'rxjs'

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  query(): Observable<FeedPostEntity[]> {
    return from(this.feedPostRepository.find())
  }

  add(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost))
  }
  update(postId: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(postId, feedPost))
  }
  delete(postId: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(postId))
  }
}
