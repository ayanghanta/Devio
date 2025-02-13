import { useParams } from 'react-router-dom';
import { getBlog } from '../../services/apiBlog';
import BlogContentDesplay from './BlogContentDesplay';
import BlogInfo from './BlogInfo';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';
import { PUBLIC_URL } from '../../constant';

function DisplayBlog() {
  const { blogId } = useParams();
  const {
    data: blog,
    isLoading,
    status,
  } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => getBlog(blogId),
  });

  if (isLoading) return <Spinner />;

  if (status === 'error') throw new Error('This Blog Does not Exist');

  const {
    title,
    blogCoverImage,
    description,
    publishedAt,
    codeTheme,
    codeLanguage,
  } = blog;

  return (
    <div className="mx-auto mt-20 max-w-80 pb-24 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <h1 className="mb-10 mt-3 font-header text-3xl font-semibold text-gray-700 sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <BlogInfo blogPublishDate={publishedAt} />

      <img
        className="mx-auto mb-12 max-w-[90%] rounded-sm"
        src={`${PUBLIC_URL}/${blogCoverImage}`}
        alt={`cover image of ${title}`}
      />
      <p className="mb-12 text-sm italic text-gray-500 sm:text-base">
        {description}
      </p>
      <BlogContentDesplay
        type="presenting"
        codeTheme={codeTheme}
        codeLng={codeLanguage}
      >
        {blog.content}
      </BlogContentDesplay>
    </div>
  );
}

export default DisplayBlog;
