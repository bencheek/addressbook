# addressbook

NodeJs Nights 2018 / final project

<h3>Links:</h3>
<ul>
<li><b>GitHub Repo</b> : https://github.com/bencheek/addressbook/ </li> 
<li><b>Deployed Backend</b> : https://addressbook-nodejsnights.herokuapp.com/ </li>
<li><b>Travis CI</b> : https://travis-ci.org/bencheek/addressbook </li>
<li><b>CodeCov</b> : https://codecov.io/gh/bencheek/addressbook/ </li>
<li><b>Firebase</b> : https://console.firebase.google.com/project/address-book-672f4/ </li>
</ul>

<p>
(Collaborator <b>backend.dept@strv.com</b> has been added to all environments)
</p>

<h3>API Description</h3> 

<table>
  <tr>
  <th><b>Operation</b></th>
  <th><b>URL</b></th>
  <th><b>Request Example</b></th> 
  <th><b>Response Example</b></th>
  </tr>  
  <tr>
    <td>Sign Up User</td>
    <td><b>POST /users</b></td>
    <td>
      {
  "name" : "meno",
  "email": "zaphod@beeblebr56o5hx.me",
  "password": "Password124!"
}
    </td>
    <td>
      {
    "name": "meno",
    "email": "zaphod@beeblebr56o5hx.me",
    "disabled": false,
    "createdAt": "2018-12-23T06:40:22.300Z",
    "id": 4,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU0NTU0NzIyMiwiZXhwIjoxNTQ1NTUwODIyLCJpc3MiOiJjb20uc3Rydi5ub2RlanMtbmlnaHRzLnByb2R1Y3Rpb24ifQ.7tBaaeWPrSNMQG-rkZKeu-nhpm-cnq-KlZMUkodCbWw"
}
    </td>  
  </tr>
    <tr>
    <td>Sign In User</td>
    <td><b>POST /sessions/user</b></td>
    <td>
{
  "name" : "meno",
  "email": "zaphod@beeblebr56ohx.me",
  "password": "Password124!"
}
    </td>
    <td>
{
    "id": 1,
    "email": "zaphod@beeblebr56ohx.me",
    "name": "meno",
    "disabled": false,
    "createdAt": "2018-12-22T20:13:30.526Z",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU0NTU0ODE0NywiZXhwIjoxNTQ1NTUxNzQ3LCJpc3MiOiJjb20uc3Rydi5ub2RlanMtbmlnaHRzLnByb2R1Y3Rpb24ifQ.XzcAntUaYkd9c5jpm0HWjlcIQu2M65LVrnqXtqxT-HA"
}
    </td>  
  </tr>
<tr>
    <td>Store new address for the logged user</td>
    <td><b>POST /addresses</b></td>
    <td>
{
    "firstName": "name",
    "lastName": "breed",
    "email": "benc@email.cz"
}
    </td>
    <td>
{
    "firstName": "name",
    "lastName": "breed",
    "email": "benc@email.cz"
}   
    </td>  
  </tr>    
  <tr>
    <td> Get all addresses for the logged user</td>
    <td><b>GET /addresses</b></td>
    <td></td>
    <td>
{
    "-LUM4cdsecFlMKpwhIaM": {
        "email": "woirrut@mohor.pl",
        "firstName": "Mina Gilbert",
        "lastName": "Isabelle Gordon"
    }
}      
    </td>  
  </tr> 
    <tr>
    <td>Get address by key for the logged user</td>
    <td><b>GET /addresses/{addressKey}</b></td>
    <td>GET /addresses/-LUM4cdsecFlMKpwhIaM</td>
    <td>
{
        "email": "woirrut@mohor.pl",
        "firstName": "Mina Gilbert",
        "lastName": "Isabelle Gordon"
}      
    </td>  
  </tr>    
    </tr> 
  <tr>
    <td>Delete address by key for the logged user</td>
    <td><b>DELETE /addresses/{addressKey}</b></td>
    <td>DELETE /addresses/-LUM4cdsecFlMKpwhIaM</td>
    <td></td>  
  </tr>  
  <tr>
    <td>Update address by key for the logged user</td>
    <td><b>PUT /addresses/{addressKey}</b></td>
    <td>
  {
    "firstName": "name2#",
    "lastName": "breed2#",
    "email": "1892#"
}</td>
    <td>
  {
    "email": "1892#",
    "firstName": "name2#",
    "lastName": "breed2#"
}
  </td>  
  </tr>    
</table>

