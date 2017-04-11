import React from 'react';
// import Link from './link.js';

const SubmitPost = React.createClass({
  render: function () {
    return (
      <section className='submit-post'>
        <form className='form-submit-post'>
          <div>
            <label htmlFor='post-title'></label>
            <input id='post-title' type='text' name='post title' placeholder='enter post title'/>
          </div>
          <div>
            <label htmlFor='post-sub-head'></label>
            <input id='post-sub-head' type='text' name='post sub heading' placeholder='enter post subheading'/>
          </div>
          <div>
            <label htmlFor='post-body'></label>
            <textarea id='post-body' name="post body" rows="8" cols="80"></textarea>
          </div>
          <button type="submit" name="submit post button">Submit post</button>
        </form>
      </section>
    );
  }
});

export default SubmitPost;
