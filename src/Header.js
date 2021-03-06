import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import logo from './assets/tinder-logo.png';
import { Link, useHistory } from 'react-router-dom';

const Header = ({backButton}) => {
  const history = useHistory();
  return (
    <div className='header' onClick={() => history.replace(backButton)}>
      <IconButton>
        {
          !backButton ?
          <PersonIcon className='header__icon' fontSize='large' /> :
          <ArrowBackIosIcon className='header__icon' fontSize='large' />
        }
      </IconButton>
      <Link to='/'>
        <img className='header__logo' src={logo} alt="Tinder Logo"/>
      </Link>
      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  )
}
export default Header;