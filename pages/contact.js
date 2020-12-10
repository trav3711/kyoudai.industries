import Head from 'head/next'
import Layout, { siteTitle } from '../components/layout'

const contact = () => (
  <Layout>
  <form>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">
  </form>
  </Layout>

)

export default contact;
