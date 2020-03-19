import React from 'react';
import { Helmet } from 'react-helmet';
import Obfuscate from 'react-obfuscate';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

export default () => (
  <>
    <Helmet>
      <title>FAQ | Stop the spread</title>
    </Helmet>
    <Header />
    <PageTitle title="FAQ" />
    <main className="py-20 w-1/2 mx-auto">
      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">Why is the JAMstack a good solution for such an announcement page?</h2>
        <p className="py-4 text-lg text-gray-800">In the current public health crisis, existing content management systems (CMSes) can easily <br />
        be overloaded and slow when lots of visitors continuously reload your website. </p>
        <p className="py-4 text-lg text-gray-800">Ease of production and reliability. JAMstack websites go up quickly, and they scale with your project as it grows. 
          They’re also reliable — even in these troubled times. Content and websites are only updated when you make changes, 
          and then stored in  global content delivery networks (CDN) for distribution. You can rest assured that your critical content is delivered. </p>
      </section>

      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">Can I customize this to my needs?</h2>
        <p className="py-4 text-lg text-gray-800">Yes, you can use the template as is, or customize it so that it works best for you. 
        If you do customize the template, it would be helpful for others if you share it with the community on GitHub.</p>
        <p className="py-4 text-lg text-gray-800">Please note that Contentful, Gatsby and Netlify only provide the template and hosting. We can’t do custom development for users.</p>
      </section>

      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">Can I use this without any development resources?</h2>
        <p className="py-4 text-lg text-gray-800">Although this customizable template makes building a website far more quickly, 
        it’s still best to have a developer set it up. Don’t have a developer on hand? 
        You can <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcdITGcpw1kWxEunHVUz6aQZzgvrGOPs3UnJvzFNafWa3M3A/viewform?usp=sf_link">request help from our volunteer network of developers and agencies</a>.</p>
      </section>

      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">What if the free Contentful Micro space is too small for my website?</h2>
        <p className="py-4 text-lg text-gray-800">If your Stop the Spread site outgrows the limits of the Micro space, 
        email <Obfuscate email="support@contentful.com" headers={{ subject: "Stop the spread space limit"}} className="underline text-blue-700" /> with the subject line “stop the spread space limit," a link to your site and your organization name and ID.</p>
        <p>To find your organization name and ID, go to the web app and click the Contentful logo in the top left corner. 
        Click through "Organization settings" to "Organization information." Make sure you have the correct organization selected from the drop-down menu in the sidebar.</p>
      </section>

      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">Can I also upgrade my Netlify account?</h2>
        <p className="py-4 text-lg text-gray-800">Yes. Netlify will also upgrade your account if requested. You can do so by …  (TBD)</p>
      </section>

      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">I like this project. How can I help?</h2>
        <p className="py-4 text-lg text-gray-800">Not all organizations have access to developers. 
        If you’re willing to be a hero and support those organizations, 
        please add your name to our <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-2ShB-KY30NzRcYRVs9dG8V5D5WVCsH1d3UWcKIrGYJsaWg/viewform?usp=sf_link" className="underline text-blue-700">volunteer network</a> or <a className="underline text-blue-700" href="https://docs.google.com/spreadsheets/d/1840HvKqZPFYWHa7e6Sl5kcv1UBnOPw6VDA0vxH0Z7aU/edit#gid=63528022">search through organizations requesting help.</a> We’ll connect you with requests as they’re received.</p>
        <p>We also need help solving open issues in <a className="underline text-blue-700" href="https://github.com/contentful/covid-19-site-template/issues/new">GitHub.</a></p>
      </section>

      <section className="py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 tracking-wide">Where can I report issues or submit feature requests?</h2>
        <p className="py-4 text-lg text-gray-800">Please report any issues and submit feature requests through <a className="underline text-blue-700" href="https://github.com/contentful/covid-19-site-template/issues/new">GitHub issues.</a></p>
      </section>
    </main>
    <Footer />
  </>
)