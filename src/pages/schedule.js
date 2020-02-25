import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Calendar from '../components/googleCalendar'

const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>MGY ~ Schedule</title>
      <meta name="description" content="schedule page"/>
    </Helmet>
    <BannerLanding />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <div style={{width: '80%', margin: 'auto'}}>
            <Calendar/>
          </div>
        </section>
      </section>
    </div>

  </Layout>
)

export default Landing