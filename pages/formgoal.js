import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

function Form(props) {
  const [state, setState] = useState({});
  const { user, loading } = useFetchUser();
  function handleChange(event) {
    event.persist();
    setState((_state) => ({
      ..._state,
      [event.target.id]: event.target.value,
    }));
  }
  function handleClick(e) {
    axios
      .post("/api/user", { state })
      .then((res) => {
        console.log(res);
      })
      .catch(console.warn());
  }
  return (
    <div>
      <form id="forUser">
        <span>Title</span>
        <input onChange={handleChange} id="Title"></input>
        <br />
        <span>Description</span>
        <input onChange={handleChange} id="Description"></input>
        <br />
        <span>Complete</span>
        <input onChange={handleChange} id="Complete" type="checkbox"></input>
        <br />
        <input type="submit" onClick={handleClick}></input>
      </form>
      <Layout user={user} loading={loading}>
        <form id="forUser">
          <span>Title</span>
          <input onChange={handleChange} id="Title"></input>
          <br />
          <span>Description</span>
          <input onChange={handleChange} id="Description"></input>
          <br />
          <span>Complete</span>
          <input onChange={handleChange} id="Complete" type="checkbox"></input>
          <br />
          <input type="submit" onClick={handleClick}></input>
        </form>
      </Layout>
    </div>
  );
}
export default Form;
