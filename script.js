document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userItem = document.createElement("div");
                userItem.classList.add("user-item");
                userItem.innerHTML = `
                    <p>${user.name} (${user.username})</p>
                    <a href="user-detail.html?id=${user.id}">ดูรายละเอียด</a>
                `;
                userList.appendChild(userItem);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});