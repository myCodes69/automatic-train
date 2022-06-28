import React from "react";
import axios from "axios";
import { Link, Route, Router } from "react-router-dom";
import { Children } from "react";
import Jewel from "./Jewel";
import Sub2 from "./Sub2";
class Products extends React.Component{
    state={
       user_info:[]
    };
  constructor(props){
      super(props);
  }
    fun=(e)=>{
      if(document.getElementById('cat').value=='')
      {
          alert("Select a catagory")
      }
        else
        {
            if(document.getElementById('cat').value=='jew')
            {this.props.history.push("/Jewel")}
        }
     }
    componentWillMount(){
        console.log(this.props);
        axios.get('https://fakestoreapi.com/products').
        then(res=>{
           let user_info=res.data;
           this.setState({user_info});
        //    console.log(res.data[0]);
        }).catch(err=>{
            console.log('err :'+err);
        })
    }
    
    render()
    {
        let mystyle={
            height:'170px',
            width:'90%',
            // padding:'0px 0px 50px 40px'
        }
        let syle={
            
            width:'40%',
            marginleft:'0px',
            

        }
        let mys={
            
        }
        
        
           
            // <div >
            // <div className="con">
            // <h1>WELCOME TO OUR E-COMMERCE SITE</h1>
            // </div>
            // <div className="sc">
            // <select id="cat" style={syle}>
            // <option value=''>Select category</option>
            //     <option value='jew' >Jewelery</option>
            //     <option value='el'>Electronics</option>
            //     <option value='m'>Men's wear</option>
            //     <option value='f'>Women's wear</option>
            // </select>
            
            // <button onClick={this.fun} >Search</button>
            // </div>
            
            
            //   <br></br>  
            //   <div >
                     {/* <div  className='cart'>
                       <Link to="/Cart">GO TO CART</Link>
                       </div>
                        <br></br>
                        <div className='user'>
                        <Link to="/User" >List of users</Link>
                        </div>
                        <br></br>
                        <div className='cat'>
                           <h2>Catagories</h2>
                          <Link to="/Jewel">Jewelery</Link>
                          <br></br>
                           <Link >Electronics (not available)</Link>
                          <br></br>
                          <Link >Men's wear (not available)</Link>
                          <br></br>
                          <Link >Women's wear (not available)</Link>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div> */}
                        
                   return(<div style={syle}>
                     <h2 >Sample Products</h2>
                     

                    
                     {this.state.user_info.map(item=>{
                     return( 
                         <div className="card">
                         
                    <Link to={{pathname:'/products/'+item.id}}>
                    <img style={mystyle} src={item.image} /> {item.title}
                    </Link> 
                    <button onClick={()=>{
                        this.props.history.push('/')
                        console.log(this.props)
                    }}>Add to Cart</button>
                     <button  onClick={()=>{
                        this.props.history.push('/login')
                    }}>Buy Now</button>
                     
                         
                         
                         </div>
                     ) })
                    }
                   
                   </div>)
               
       
    }

}
export default Products;