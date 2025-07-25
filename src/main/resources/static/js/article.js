const deleteButton = document.getElementById('delete-btn');
const modifyButton = document.getElementById('modify-btn');
const createButton = document.getElementById('create-btn');

// 삭제
if (deleteButton) {
    deleteButton.addEventListener('click', () => {
        const id = document.getElementById('article-id').value;

        fetch(`/api/articles/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('삭제가 완료되었습니다.');
            location.replace('/articles');
        });
    });
}

// 수정
if (modifyButton) {
    modifyButton.addEventListener('click', event => {
        let params = new URLSearchParams(location.search);
        let id = params.get('id');

        fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
        .then(() => {
            alert('수정이 완료되었습니다.');
            location.replace(`/articles/${id}`);
        });
    });
}

// 등록
if (createButton) {
    createButton.addEventListener('click', () => {
        fetch('/api/articles', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
        .then(() => {
            alert('등록이 완료되었습니다.');
            location.replace('/articles');
        });
    });
}

const createButton = document.getElementById("create-btn");
if (createButton) {
    createButton.addEvenListener("click", (event) => {
        fetch("/api/articles, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
            }),
            }).then(() => {
            alert("등록 완료되었습니다.");
            location.replace("/articles");
            });
    });
}