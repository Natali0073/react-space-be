import { PostsListDTO } from '../../../interfaces/posts';
import { RouteComponentProps } from 'react-router';

export interface PostByIdProps extends RouteComponentProps<any> {
  postById: PostsListDTO;
  getPostById: any;
}