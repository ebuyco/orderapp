import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link
              to='www.facebook.com'
            >
              <img src={Facebook} alt='facebook_social_media' />
            </Link>
            <Link
              to='https://ebuyco.github.io/'
            >
              <img src={Github} alt='github_alt_data' />
            </Link>
            <Link
              to='https://ebuyco.github.io/'
            >
              <img src={Instagram} alt='instagram_images' />
            </Link>
          </ContentList>
        </List>
      </SocialMedia>
      <ContactContent>
        <List>
          <ContentList>
            <Link
              to='https://facebook.com/'
            >
              <img src={Linkedin} alt='linkedin_social_media' />
            </Link>
            <Link
              to='https://google.com/'
            >
              <img src={Gplus} alt='gplus_alt_data' />
            </Link>
            <Link
              to='https://ebuyco.github.io/'
            >
              <img src={Skype} alt='skype_images' />
            </Link>
          </ContentList>
        </List>
      </ContactContent>
    </FooterLayout>
  </FooterStyle>
);

export default Footer;
