# ๐ js์์ ๋น๋๊ธฐ ํต์  ์ค์ต ๋ฐ ํจ์ ๋ฌธ๋ฒ

## ๐ ์๊ฐ

- 21-11-06 ๋ถ์ฒ ์คํฐ๋ ๋ฐํ ์ค๋น ์๋ฃ
- ๋๊ฐ์ง ์ฃผ์ ๋ก ๋ฐํ
    - ์๋ฐ์คํฌ๋ฆฝํธ์์ ajax, axios, fetch์ ๋ํ ๊ฐ๋จํ ์ค๋ช๊ณผ ์ฌ์ฉ๋ฐฉ๋ฒ
    - ์๋ฐ์คํฌ๋ฆฝํธ์์ 1๊ธ ๊ฐ์ฒด๋ก์์ ํจ์ ๊ด๋ จ ๋ฌธ๋ฒ ๋ช๊ฐ์ง

## ๐ ๋ชฉ์ฐจ

1. ์๊ฐ
1. js ๋น๋๊ธฐ ํต์  ๊ฐ๋ ์ ๋ฆฌ
1. ๋น๋๊ธฐ ํต์  ์ค์ต
1. ๊ฐ์ฒด๋ก์์ js ํจ์ ๋ฌธ๋ฒ
1. ์ฐธ๊ณ 

## ๐ js ๋น๋๊ธฐ ํต์  ๊ฐ๋ ์ ๋ฆฌ

### js์์ ๋น๋๊ธฐ ํต์ ์ด๋?

- ์๋ก๊ณ ์นจ(์ ์ฒด ํ์ด์ง ๊ฐฑ์ )์์ด ํต์ ํ๋ค.
- Ajax(Asynchronous JavaScript And XML)

### js์์ ๋น๋๊ธฐ ํต์ ํ๋ ๋ฐฉ๋ฒ์?

- XMLHttpRequest ๊ฐ์ฒด ์ด์ฉ
- jQuery ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ด์ฉ
- axios ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ด์ฉ
- fetch API ์ด์ฉ

### XMLHttpRequest

- ๋น๋๊ธฐ ํต์ ์ ํ๊ธฐ ๋ณต์กํ๋ค.

### jquery

- promise๊ธฐ๋ฐ์ด ์๋๋ค.

### axios

- node.js์ ๋ธ๋ผ์ฐ์ ๋ฅผ ์ํ httpํต์  javascript ๋ผ์ด๋ธ๋ฌ๋ฆฌ
- JSON ๋ฐ์ดํฐ ์๋ ๋ณํ
- Promise ๊ธฐ๋ฐ
- ๋ธ๋ผ์ฐ์  ํธํ์ฑ ๋ฐ์ด๋๋ค.
- ์๋ฌํธ๋ค๋ง์ด ์ฝ๋ค๊ณ  ํ๋ค.
- ๋ง์ด ์ฌ์ฉํ๋ค๊ณ  ํ๋ค.
- npm์์ axios๋ฅผ ์ค์นํด์ ์ฌ์ฉํ์ง ์๊ณ  cdn์ผ๋ก๋ ์ฌ์ฉ ๊ฐ๋ฅ

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### fetch

- ES6๋ถํฐ js์ ๋ด์ฅ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
- Promise ๊ธฐ๋ฐ
- json์ผ๋ก ๋ณํํด์ฃผ๋ ๊ณผ์ ์ด ํ์ํ๋ค.

## ๐ ๋น๋๊ธฐ ํต์  ์ค์ต

### ์ค์ต ํ๊ฒฝ

IDE

- Visual Studio Code
    - Live Server Extension

REST API ์ฌ์ดํธ

- https://reqres.in/api/

### jQuery

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
    <!-- GET -->
    <script>
        function funcGet() {
            $.ajax({
                url: 'https://reqres.in/api/users/2',
                type: 'GET',
                success: function onData(res) {
                    console.log(res);
                    console.log(res.data.email);
                    let div = document.getElementById("get_result");
                    div.innerHTML = JSON.stringify(res);
                    // div.innerHTML = res.data.email;
                },
                error: function onError(error) {
                    console.error(error);
                }
            });
        }

    </script>
    <h3>get_result</h3>
    <div id="get_result">

    </div>
    <button type="button" onclick="funcGet();">get</button>

    <!-- POST -->
    <script>
        function funcPost() {
            $.ajax({
                url: 'https://reqres.in/api/users',
                type: 'POST',
                data: {
                    name: document.getElementById("post_name").value,
                    job: "leader"
                },
                success: function onData(res) {
                    console.log(res);
                    console.log(res.id);
                    let div = document.getElementById("post_result");
                    div.innerHTML = JSON.stringify(res);
                },
                error: function onError(error) {
                    console.error(error);
                }
            });
        }
    </script>
    <h3>post_result</h3>
    <div id="post_result">

    </div>
    name: <input type="text" id="post_name" name="name"><br>
    <button type="button" onclick="funcPost();">post</button>
</body>

</html>
```

### axios

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body>
    <!-- GET -->
    <script>
        function funcGet() {
            axios({
                method: 'get',
                url: 'https://reqres.in/api/users/2',
                responseType: 'json'

            })
                .then(res => {
                console.log(res);
                console.log(res.data.data.email);
                let div = document.getElementById("get_result");
                div.innerHTML = JSON.stringify(res);
                // div.innerHTML = res.data.email;
            })
            .catch(error => {
                console.log(error);
            });
        } 

    </script>
    <h3>get_result</h3>
    <div id="get_result">

    </div>
    <button type="button" onclick="funcGet();">get</button>

    <!-- POST -->
    <script>
        function funcPost() {
            axios({
                method: 'post',
                url: 'https://reqres.in/api/users',
                data: {
                    name : document.getElementById("post_name").value,
                    job : "leader"
                },
                responseType: 'json'

            })
            .then(res => {
                console.log(res);
                console.log(res.data.id);
                let div = document.getElementById("post_result");
                div.innerHTML = JSON.stringify(res);
            })
            .catch(error => {
                console.log(error);
            });
        }
    </script>
    <h3>post_result</h3>
    <div id="post_result">

    </div>
    name: <input type="text" id="post_name" name="name"><br>
    <button type="button" onclick="funcPost();">post</button>    
</body>
</html>
```

### fetch

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body>
    <!-- GET -->
    <script>
        function funcGet() {
            fetch("https://reqres.in/api/users/2", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    console.log(res.data.email);
                    let div = document.getElementById("get_result");
                    div.innerHTML = JSON.stringify(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    </script>
    <h3>get_result</h3>
    <div id="get_result">

    </div>
    <button type="button" onclick="funcGet();">get</button>

    <!-- POST -->
    <script>
        function funcPost() {
            fetch("https://reqres.in/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: document.getElementById("post_name").value,
                    job: "leader"
                })
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    console.log(res.id);
                    let div = document.getElementById("post_result");
                    div.innerHTML = JSON.stringify(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    </script>
    <h3>post_result</h3>
    <div id="post_result">

    </div>
    name: <input type="text" id="post_name" name="name"><br>
    <button type="button" onclick="funcPost();">post</button>
</body>
</html>
```

### ๐ then โ async, await์ผ๋ก ๋ณ๊ฒฝ

then

```jsx
<!-- GET -->
<script>
    function funcGet() {
        fetch("https://reqres.in/api/users/2", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                console.log(res.data.email);
                let div = document.getElementById("get_result");
                div.innerHTML = JSON.stringify(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
</script>
```

async, await

```jsx
<!-- GET -->
<script>
    async function funcGet() {
        let response = await fetch("https://reqres.in/api/users/2", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let response2 = await (response.json());
        console.log(response2);
        console.log(response2.data.email);
        let div = document.getElementById("get_result");
        div.innerHTML = JSON.stringify(response2);
    }
</script>
```

## ๐ ๊ฐ์ฒด๋ก์์ js ํจ์ ๋ฌธ๋ฒ

### 1๊ธ๊ฐ์ฒด๋?

๋ค์ 3๊ฐ์ง ์กฐ๊ฑด์ ์ถฉ์กฑํ๋ ๊ฐ์ฒด์ด๋ค.

1. ๋ณ์๋ ๋ฐ์ดํฐ์ ํ ๋นํ  ์ ์์ด์ผ ํ๋ค.
2. ๊ฐ์ฒด์ ์ธ์๋ก ๋๊ธธ ์ ์์ด์ผ ํ๋ค.
3. ๊ฐ์ฒด์ ๋ฆฌํด๊ฐ์ผ๋ก ๋ฆฌํดํ  ์ ์์ด์ผ ํ๋ค.

### ์๋ฐ์ ์๋ฐ์คํฌ๋ฆฝํธ ๋น๊ต

์๋ฐ

- ํจ์๋ฅผ ๊ฐ์ฒด์ ๋ด์ ์ ์๋ค.

```java
public class FirstClassCitizen {
	public static void func() {
		System.out.println("hi");
	}
	
	public static void main(String[] args) {
		// Object a = func;
	}
}
```

์๋ฐ์คํฌ๋ฆฝํธ

- ํจ์๋ฅผ ๊ฐ์ฒด์ ๋ด์ ์ ์๋ค.

```jsx
<script>
    function func(a) {
        console.log(a);
        return func
    }
    func('hi');
</script>
```

### ํจ์ ๊ด๋ จ js ๋ฌธ๋ฒ ์์

```jsx
<script>
    function func(a) {
        console.log(a);
        return func
    }
    func('hi')('bye')('hahaha');
</script>
```

```jsx
<script>
    const isDelivery = obj => flag => ({...obj, "deliver":flag});
    const chooseMenu = obj => menu => isDelivery({...obj, menu});
    const chooseRestaurant = name => chooseMenu({name});
    console.log(chooseRestarant("์ค๊ตญ์ง")("์ง์ฅ๋ฉด")(true));
</script>
```

## ๐ ์ฐธ๊ณ 

[[๊ฐ๋ฐ์์] Ajax์ Axios ๊ทธ๋ฆฌ๊ณ  fetch](https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-Ajax%EC%99%80-Axios-%EA%B7%B8%EB%A6%AC%EA%B3%A0-fetch)

[Reqres - A hosted REST-API ready to respond to your AJAX requests](https://reqres.in/)
