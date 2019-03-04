import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterStyle, FooterLayout, SocialMedia,
  ContactContent, List, ContentList, ImageWrapper } from './FooterStyle';
import { Facebook, Footer1, Github, Instagram,
  Skype, Linkedin, Gplus } from '../../assets/svg';

const Footer = () => (

  <FooterStyle>
    <ImageWrapper src={Footer1} alt='footer_image' />
    <FooterLayout>
      <SocialMedia>
        {/* <p>You can Connect with us or contact use</p> */}
        <List>
          <ContentList>
            <NavLink
              target='_blank'
              to='/https://.facebook.com'

            >
              <img src={Facebook} alt='facebook_social_media' />
            </NavLink>
            <NavLink
              to='/https://ebuyco.github.io'
              target='_blank'

            >
              <img src={Github} alt='github_alt_data' />
            </NavLink>
            <NavLink
              target='_blank'
              to='/https://ebuyco.github.io'


            >
              <img src={Instagram} alt='instagram_images' />
            </NavLink>


          </ContentList>
        </List>
      </SocialMedia>
      <ContactContent>
        <List>
          <ContentList>

            <NavLink
              to='/https://facebook.com'
              target='_blank'
            >
              <img src={Linkedin} alt='linkedin_social_media' />
            </NavLink>
            <NavLink
              to='/https://google.com'
              target='_blank'
            >
              <img src={Gplus} alt='gplus_alt_data' />
            </NavLink>
            <NavLink
              to='/https://ebuyco.github.io'
              target='_blank'
            >
              <img src={Skype} alt='skype_images' />
            </NavLink>

          </ContentList>
        </List>
      </ContactContent>
    </FooterLayout>
  </FooterStyle>
);

export default Footer;
