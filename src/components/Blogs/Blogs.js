import React from "react";

const Blogs = () => {
  return (
    <div className="md:container mx-auto p-5 space-y-2">
      <h1 className="font-bold text-2xl">Blogs </h1>
      <h1 className="text-xl font-bold">
        1. Difference between javascript and nodejs
      </h1>
      <p>
        Answer: JavaScript is used for writing script on the website and NodeJS
        is a javascript runtime environment. Javascript can run only on browser
        and node js can run javascript outside of browser. Javascript is
        basically used on the client-side. It is mostly used on the server-site.
        Javascript can modify HTML Dom but Nodejs does not modify HTML tags.
        React js, Vue js, Angular js is example of javascript frameworks and
        Lodash, express etc are Node js frameworks.{" "}
      </p>
      <h1 className="text-xl font-bold">
        2. When should you use nodejs and when should you use mongodb
      </h1>
      <p>
        Answer: Nodejs is javascript run time environment and Mongodb is noSql
        database which we use for store data. Node js is handle user request and
        response and by user request node js create, read, update, delete data
        from database. So, if our application needs to store data and update
        this data later so then we have to use a database, and mongodb is
        popular database so that we can use it.
      </p>
      <h1 className="text-xl font-bold">
        3. Differences between sql and nosql databases.
      </h1>
      <p>
        Answer: SQL is relational database, NoSQL databases are non-relational.
        SQL databases have a predefined schema. NoSQl databases have dynamic
        schemas. SQL database is structured query language and NoSQL database is
        structured. SQL database store data like tabular format and NoSQL
        database store data like documents or JSON formate.{" "}
      </p>
      <h1 className="text-xl font-bold">
        4. What is the purpose of jwt and how does it work
      </h1>
      <p>
        Answer: JWT used to generate access token for an application. JWT
        generate token on client side and sends it to client. And by using this
        token client request to the server and get access of an application.
        This token is a identity of an user. JWT is a string has three parts
        separate by dot. After decode it will gives information which
        information we did encode. By matching decoded information and request
        information we can verify identity.
      </p>
    </div>
  );
};

export default Blogs;
