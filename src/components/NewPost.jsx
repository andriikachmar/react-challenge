import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addPost, editPost } from '../actions/postsActions';

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let initialValues = {};

  if (history.location.state === undefined) {
    initialValues = { title: '', body: '' };
  } else {
    initialValues = { title: '', body: '', id: history.location.state.id };
  }

  const validErrorInitialstate = { titleError: '', bodyError: '' };

  const [values, setValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState(validErrorInitialstate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = values;
    let { titleError, bodyError } = '';

    if (!title) {
      titleError = 'Please, enter a title';
    }

    if (!body) {
      bodyError = 'Please, enter a body';
    }

    if (titleError || bodyError) {
      setInputErrors({ ...inputErrors, titleError, bodyError });
      return false;
    }

    if (history.location.state) {
      dispatch(editPost(values));
      history.goBack();
    } else {
      dispatch(addPost(values));
    }

    setInputErrors(validErrorInitialstate);
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = ''),
    );
    setValues(initialValues);
  };

  return (
    <form>
      <h2>Create a new post</h2>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          defaultValue={values.title}
          onChange={handleInputChange}
          type="text"
          name="title"
          label="title"
        />
        <small>{inputErrors.titleError}</small>
      </div>
      <div>
        <label htmlFor="body">Body: </label>
        <input
          defaultValue={values.body}
          onChange={handleInputChange}
          type="text"
          name="body"
          label="body"
        />
        <small>{inputErrors.bodyError}</small>
      </div>
      <button onClick={handleSubmit} type="submit"> Submit </button>
      {history.location.state !== undefined ? <Link to="/">Back</Link> : null}
    </form>
  );
};

export default NewPost;
