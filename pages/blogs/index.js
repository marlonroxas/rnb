
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import Masthead from 'components/shared/Masthead';
import { Row, Col } from 'reactstrap';
import BlogItem from 'components/BlogItem';
import BlogApi from 'lib/api/blogs';

const Blogs = ({blogs}) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout
      navClass="transparent" className="blog-listing-page"
      user={data} loading={loading}>
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, travelling...</span>
      </Masthead>
      <BasePage
        title="Newest Blogs - Marx Roxas"
        className="blog-body">
        <Row>
          {
            blogs.map(blog =>
              <Col key={blog._id} md="10" lg="8" className="mx-auto">
                <BlogItem blog={blog}/>
                <hr></hr>
              </Col>
            )
          }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  // const { data } = await new BlogApi().getAll();
  // const blogs = data.map(item => ({...item.blog, author: item.author}))
  const blogs = [
    {
      id: 1,
      author: 'Marx',
      title: 'Hello World Title',
      subtitle: 'Hello World Subtitle',
      description: 'Description'
    },
    {
      id: 2,
      author: 'Marx',
      title: 'Hello World Title 2',
      subtitle: 'Hello World Subtitle 2',
      description: 'Description'
    }
  ]
  return {
    props: { blogs }
  }
}

export default Blogs;
