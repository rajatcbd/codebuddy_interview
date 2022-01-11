//bad quality
async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let user = doc[0];
    let Profile = doc[1];
    let p = doc[2];
  
    const userProfile = {
      user: user,
      profile: Profile,
      posts: p
    };
  
    return userProfile;
  }

  //good quality

  async function getUsers() {
    let doc = await Promise.all([getUser(), getProfile(), getPosts()]);
  
    // let user = doc[0];
    // let Profile = doc[1];
    // let p = doc[2];
    let [user,profile,posts] = doc
  
    const userProfile = {
      user,
      profile,
      posts
    };
  
    return userProfile;
  }

  //bad code 
  async function getUsers(users) {
    const new_users = [];
  
    for (let i = 0; i < users.length; i = i + 1) {
      const newUser = user[i];
      newUser.id = i;
  
      new_users.push(newUser);
    }
  
    return new_users;
  }


  //good code
function getUsers(users) {
    let new_users = [...users];
    
   new_users = new_users.map((item,index)=>{
    return {...item,id : index}
   })
  
    return new_users;
  }