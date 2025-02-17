document.addEventListener("DOMContentLoaded", () => {
    const userDetailContainer = document.getElementById("user-detail");
    const viewPostsButton = document.getElementById("view-posts");

    // ดึง ID ของ user จาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    if (!userId) {
        userDetailContainer.innerHTML = "<p>ไม่พบข้อมูลผู้ใช้</p>";
        return;
    }

    // Fetch ข้อมูลผู้ใช้
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            userDetailContainer.innerHTML = `
                <h2>${user.name} (${user.username})</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            // ตั้งค่า URL ของปุ่ม "ดูโพสต์ทั้งหมด"
            viewPostsButton.addEventListener("click", () => {
                window.location.href = `user-posts.html?id=${userId}`;
            });
        })
        .catch(error => {
            userDetailContainer.innerHTML = "<p>เกิดข้อผิดพลาดในการดึงข้อมูล</p>";
            console.error("Error fetching user details:", error);
        });
});