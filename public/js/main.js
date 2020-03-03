function addUser() {
  const data = {
    _id: "69",
    f_name: "tim",
    l_name: "apple",
    email: "tim.apple@apple.com",
    alias: { f_name: "Tim", l_name: "Cook" }
  };

  const request = fetch("http://localhost:8080/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  request
    .then(rsp => {
      console.log(rsp);
    })
    .catch(err => {
      console.log(err);
    });
}

async function updateUser(userID, data) {
  const rsp = await fetch("http://localhost:8080/api/user/" + userID, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  try {
    console.log(rsp);
  } catch (error) {
    console.log(error);
  }
}

addUser();
