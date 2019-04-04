import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'reactstrap';
import Ironman from '../../Images/Ironman.jpg';
import Thor from '../../Images/Thor.jpg';
import CaptainMarvel from '../../Images/Captain_Marvel.jpeg';
import Background from '../../Images/Endgame_Background.jpg';

import $ from 'jquery';
import './Home.css';
const backdrop = {
      
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      width:'100vw',
      height: '100vh'
    }


class Home extends Component {

 
  constructor(){
    super();
    this.state = {bio:null,name:null};

  
};
 mouseenter(info,name){
  let ptag = $('p#bio');
  let char_name = $('h1#name')

this.setState({bio:info,name:name});
//console.log(this.state.bio);

ptag.text(this.state.bio);
char_name.text(this.state.name);
};


 mouseleave(){
  let ptag = $('p#bio');
  let char_name = $('h1#name');

this.setState({bio:null,name:null}); 
ptag.text(this.state.bio);
char_name.text(this.state.name);
};

  render(){


    const heros = [
    {name:"Iron Man",Bio:"Genius, Billionaire, Playboy, Philanthropist",Pic:Ironman}
    ,{name:"Thor",Bio:"Norse God of Thunder, occasionally goes by Sparkles",Pic:Thor},
    {name:"Captain Marvel",Bio:"A Pilot turned into a super powerful Cree soldier from an Infinity Stone",Pic:CaptainMarvel}];
    const Characters = heros.map(hero=> {
     return( 
      <td key ={hero.name} >
        <Link  to={{
          pathname:"/Story",
          state: {
            name: hero.name
          }
      }}>
          <img onMouseEnter={ ()=> this.mouseenter(hero.Bio,hero.name)} onMouseLeave={()=> this.mouseleave()}  src={hero.Pic} alt={hero.name}/>
        </Link>
      </td>
      )
    });
    var space_Bios={backgroundColor:'rgba(0,0,0,.5)',marginTop: '0',width:'60%'}
    var space_header={backgroundColor:'rgba(0,0,0,.5)',width:'60%' }
    var space_div = {};
    var table_Space = {paddingTop: '30vh'}

    return (
     
      <div className="App" style={backdrop}>
        <h1>CHOOSE YOUR CHARACTER</h1>
        <Table style={table_Space}>
          <tbody>
          <tr>
            {Characters}
            </tr>
          </tbody>
        </Table>
        <Fragment style={space_div}>
          <h1 id='name' style={space_header} >
            {this.state.name}
          </h1>
          <p id='bio' style ={space_Bios}>
          {this.state.bio}
          </p>
        </Fragment>
      </div>
     
    );
  }
}

export default Home;
