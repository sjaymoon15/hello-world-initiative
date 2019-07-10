import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'

const About = () => {
  return (
    <>
      <Header text="About Us" pageName="about" />
      <main>
        <Section color="dark">
          <p>This is the top section. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis labore nam architecto, illo dolores. Optio voluptas similique non libero quia, vel illum aspernatur laudantium delectus, dignissimos animi doloremque, sequi sit corrupti nostrum temporibus repellat ratione ipsa tempore! Debitis iusto incidunt dolorum est quod veniam nisi ipsa molestiae error excepturi, hic, dolores rerum autem amet officia ullam in minima quibusdam eaque magnam quam provident saepe sed quo! Ex error sapiente beatae laboriosam dicta magni magnam. Quisquam mollitia odit expedita consequuntur.</p>
        </Section>
        <Section color="light">
          <p>This is the bottom section. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis labore nam architecto, illo dolores. Optio voluptas similique non libero quia, vel illum aspernatur laudantium delectus, dignissimos animi doloremque, sequi sit corrupti nostrum temporibus repellat ratione ipsa tempore! Debitis iusto incidunt dolorum est quod veniam nisi ipsa molestiae error excepturi, hic, dolores rerum autem amet officia ullam in minima quibusdam eaque magnam quam provident saepe sed quo! Ex error sapiente beatae laboriosam dicta magni magnam. Quisquam mollitia odit expedita consequuntur.</p>
        </Section>
      </main>
    </>
  )
}

export default About
