import React from "react";
import "./styles.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";





const Comments = () => {
    // setup state
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [text, setText] = useState("");
  
  
  
 /*
  //dinner funcitons
  const fetchDinner = async() => {
    try {      
      const response = await axios.get("/api/dinner");
      setDinner(response.data);
      //fetchTotal();
    } catch(error) {
      setError("error retrieving dinner: " + error);
    }
  }
  
  const addDinner = async(product) => {
    try {
      await axios.post("/api/dinner/" + product.id);
    } catch(error) {
      setError("error adding a product to dinner" + error);
    }
  }
  
  const upOneDinner = async(item) => {
    try {
      let newQuant = item.quantity + 1;
      await axios.put("/api/dinner/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the dinner" + error);
    }
  }
  
  const downOneDinner = async(item) => {
    try {
      let newQuant = item.quantity - 1;
      await axios.put("/api/dinner/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the dinner" + error);
    }
  }
  
  const removeOneDinner = async(item) => {
    try {
      await axios.put("/api/dinner/" + item.id + "/" + 0);
    } catch(error) {
      setError("error decrementing a product in the dinner" + error);
    }
  }
  
  const addToDinner = async(product) => {
    await addDinner(product);
    fetchDinner();
    
    
  }
  */
  
  
  //productFuncitons
  const fetchComments = async() => {
    try {      
      const response = await axios.get("/api/comments");
      setComments(response.data);
    } catch(error) {
      setError("error retrieving comments: " + error);
    }
  }
  
  const createComment = async() => {
    try {
      await axios.post("/api/comments", {name: name, relation: relation, text: text});
    } catch(error) {
      setError("error adding a comment: " + error);
    }
  }
  /*const deleteOneProduct = async(product) => {
    try {
      await axios.delete("/api/products/" + product.id);
    } catch(error) {
      setError("error deleting a product" + error);
    }
  }*/
  
  useEffect(() => {
    fetchComments();
  },[]);

  const addComment = async(e) => {
    e.preventDefault();
    await createComment();
    fetchComments();
    setName("");
    setRelation("");
    setText("");
  }
  
  /*const thisComment = async(item) => {
    try {
      return axios.get("/api/commets/" + item.id);
    } catch(error) {
      setError("error getting a product" + error);
    }
  }
  
  const getProduct = async(item) => {
    return thisProduct(item);
  }
  */
  
    
    
    
   return (
       
        
        <div className="page-content">
        {error}
            <div class = "center-types">
                <h1>Leave us a comment!</h1>
            </div>
      
      
      
      <h2>Past Comments:</h2>
      <br></br>
      {comments.map( comment => (
        <div key={comment.name}>
          <h2 class= 'commenter-name'>{comment.name}</h2>
          <h7 class = 'commenter-relation'>{comment.relation}</h7>
          <h5 class = 'comment-text'> {comment.text}</h5>
        </div>
      ))}
      
    
      
      <h3>Add a comment</h3>
      <form onSubmit={addComment}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Relationship:
            <input value={relation} onChange={e=>setRelation(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label>
            Comment:
            <input value={text} onChange={e=>setText(e.target.value)}></input>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    
    
 
    
        <footer>
            <a href = "https://github.com/hpertab/CP5.git">GitHub Code</a>
            <p class="yomama">Hana Pertab and Brianna White</p>
        </footer>

        </div>
  );
};

export default Comments;