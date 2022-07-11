import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Observable } from 'rxjs'
import { CreatePostDto } from '../dto/feed.dto'
import { FeedPostEntity } from '../entities/post.entity'
import { FeedPost } from '../models/feed.model'
import { FeedService } from '../services/feed.service'

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Get()
  getFeedPosts(): Observable<FeedPostEntity[]> {
    return this.feedService.query()
  }

  @Post()
  addFeedPost(@Body() createPostDto: CreatePostDto): Observable<FeedPost> {
    return this.feedService.add(createPostDto)
  }

  @Put(':postId')
  updateFeedPost(
    @Body() createPostDto: CreatePostDto,
    @Param('postId') postId: number,
  ) {
    return this.feedService.update(postId, createPostDto)
  }

  @Delete(':postId')
  deleteFeedPost(@Param('postId') postId: number) {
    return this.feedService.delete(postId)
  }
}
