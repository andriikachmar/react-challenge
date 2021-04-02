import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../actions/commentsActions';

const Comments = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const initialValues = { postId: id, body: '' };
  const validErrorInitialstate = { bodyError: '' };

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

    let bodyError = '';

    if (!values.body) {
      bodyError = 'Please, enter a body';
    }

    if (bodyError) {
      setInputErrors({ ...inputErrors, bodyError });
      return false;
    }

    dispatch(addComment(values));

    setInputErrors(validErrorInitialstate);
    document.querySelector('textarea').value = '';
    setValues(initialValues);
  };

  return (
    <div>
      <h3>Comments: </h3>
      {
        comments.map((item) => {
          if (item.postId === id) {
            return <p key={item.body}>{item.body}</p>;
          }
        })
      }
      <form>
        <div>
          <label htmlFor="body">Write here: </label>
          <textarea
            defaultValue={values.title}
            onChange={handleInputChange}
            type="text"
            name="body"
            label="body"
            rows="2"
            cols="30"
          />
          <br />
          <button onClick={handleSubmit}>Add comment</button>
          <small>{inputErrors.bodyError}</small>
        </div>
      </form>
    </div>
  );
};

export default Comments;
