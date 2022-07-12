## Flask에서 로그인 및 회원가입 기능 구현하기
- JWT(Json Web Token): JSON객체를 사용해 정보를 안정성 있게 전달
- python 에서 jwt 모듈 설치
- 클라이언트에서 id/pw값을 받아 온 것을 가정
  - Id: cId
  - pw: cPw

### 회원가입
```
# 클라이언트에서 받은 pw 값을 암호화 하여 디비에 저장
pw = hashlib.sha256(cId.encode('utf-8')).hexdigest()
```

### 로그인
```
pw = hashlib.sha256(cPw.encode('utf-8')).hexdigest()
# 암호화 한 pw 값을 통해 DB 탐색
result = db.[Collection].find_one({'id': cId, 'pw': pw})

if result is Not None:
    payload = {
        'id': cId,
        'exp': [유효 시간 설정]
    }
    token = jwt.encode(payload, [], algorithm='HS256').decode('utf-8')
    return jsonify({'token': token})
else:
    return jsonify({'로그인 실패'})
```

2. Jinja2 템플릿을 이용해 SSR 하기
- SSR: Server Side Rendering
- 서버
```
@app.route('/')
def home():
    dummy = 'dummy data'
    # / 경로로 진입 시 `index.html` 파일을 렌더링, 파라미터를 통해 클라이 언트 측에 데이터를 넘겨준다.
    return render_template("index.html", data=dummy_data)
```

- 클라이언트
```
# `{{}}` 을 사용해 서버에서 넘겨받은 변수 사용
# `<script>` 태그에도 사용 가능
<body>
    <h1>{{ data }}</h1>
</body>
```