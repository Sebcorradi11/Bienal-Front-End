import React from 'react';
import LinkButtons from '../../../components/LinkButtons';

const LinkButtonList = ({ handleLogin }) => (
    <>
        <LinkButtons platform="google" onClick={() => handleLogin('google')} />
        <LinkButtons platform="facebook" onClick={() => handleLogin('facebook')} />
        <LinkButtons platform="instagram" onClick={() => handleLogin('instagram')} />
    </>
);

export default LinkButtonList;
