window.MMH_EXERCISES = [
  {
    "section": "Cơ sở toán học",
    "question": "Điền các giá trị còn thiếu trong bảng tính của thuật toán Euclid mở rộng.",
    "id": 1,
    "answer": "Thiếu bảng Euclid mở rộng của đề gốc.",
    "solution": "Danh sách bài tập trước chỉ lưu mô tả câu hỏi, không có các hàng của bảng. Không thể điền chính xác các ô còn thiếu nếu không có bảng gốc.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "Cơ sở toán học",
    "question": "Áp dụng thuật toán nhân bình phương có lặp để tính 41^117 mod 211 và điền các giá trị còn thiếu trong bảng.",
    "id": 2,
    "answer": "89",
    "solution": "Dùng bình phương và nhân: viết 117=64+32+16+4+1. Tính lần lượt các lũy thừa 41^(1,2,4,8,16,32,64) modulo 211 rồi nhân các mốc 1,4,16,32,64. Kết quả 41^117 ≡ 89 (mod 211).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cơ sở toán học",
    "question": "Đáp án nào là thặng dư bậc hai modulo 23? Các lựa chọn: 8, 10, 7, 5.",
    "id": 3,
    "answer": "8",
    "solution": "Tính x² mod 23 với x=1,…,11 thu được tập thặng dư bậc hai {1,2,3,4,6,8,9,12,13,16,18}. Trong 8,10,7,5 chỉ có 8 thuộc tập.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cơ sở toán học",
    "question": "Trong thuật toán tính căn bậc hai của 75 mod 97, chọn b=5. Tại vòng lặp i=1, tìm d, r, c.",
    "id": 4,
    "answer": "Thiếu định nghĩa các biến d, r, c của thuật toán trong slide/đề.",
    "solution": "Có nhiều thuật toán khai căn modulo dùng các ký hiệu d,r,c khác nhau. Cần đúng bảng/thuật toán trong đề để xác định giá trị tại vòng i=1.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "Cơ sở toán học",
    "question": "Cho một số ký hiệu Jacobi, xác định ký hiệu có giá trị khác các ký hiệu còn lại.",
    "id": 5,
    "answer": "Thiếu các ký hiệu Jacobi cụ thể.",
    "solution": "Cần các biểu thức Jacobi của bốn lựa chọn để tính và so sánh.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Tính số phần tử sinh của Z*14.",
    "id": 6,
    "answer": "2 phần tử sinh",
    "solution": "φ(14)=6. Z*14 là cyclic vì 14=2·7. Số phần tử sinh = φ(φ(14))=φ(6)=2.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Tính số phần tử sinh của Z*35.",
    "id": 7,
    "answer": "0 phần tử sinh",
    "solution": "35=5·7 không có dạng 2, 4, p^k hay 2p^k. Vì vậy Z*35 không cyclic và không có phần tử sinh.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Tính số phần tử sinh của Z*481.",
    "id": 8,
    "answer": "0 phần tử sinh",
    "solution": "481=13·37 nên không có dạng p^k hoặc 2p^k. Do đó Z*481 không cyclic, số phần tử sinh bằng 0.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Tính số phần tử sinh của Z*686.",
    "id": 9,
    "answer": "84 phần tử sinh",
    "solution": "686=2·343=2·7^3 nên Z*686 cyclic. φ(686)=φ(2)φ(7^3)=1·(343−49)=294. Số phần tử sinh = φ(294)=84.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Trong các nhóm Z*21, Z*30, Z*35, Z*50, nhóm nào có phần tử sinh?",
    "id": 10,
    "answer": "Z*50",
    "solution": "Dùng điều kiện Z*n cyclic ⇔ n=2,4,p^k hoặc 2p^k với p lẻ nguyên tố. 50=2·5² thỏa điều kiện; 21,30,35 không thỏa.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Trong các nhóm Z*91, Z*57, Z*45, Z*98, nhóm nào có phần tử sinh?",
    "id": 11,
    "answer": "Z*98",
    "solution": "98=2·7² nên thỏa dạng 2p^k. Các số 91=7·13, 57=3·19, 45=3²·5 không thỏa.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Trong các nhóm Z*242, Z*44, Z*133, Z*15, nhóm nào là nhóm cyclic?",
    "id": 12,
    "answer": "Z*242",
    "solution": "242=2·11² nên cyclic. 44=4·11, 133=7·19, 15=3·5 không thuộc các dạng cho phép.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Tìm phần tử sinh nhỏ nhất của Z*47.",
    "id": 13,
    "answer": "5",
    "solution": "Vì 47 là số nguyên tố, |Z*47|=46=2·23. Kiểm tra 5^(46/2)=5^23 ≠1 (mod 47) và 5^(46/23)=5²≠1 (mod 47), nên ord(5)=46. Các số nhỏ hơn 5 không sinh toàn nhóm.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Tìm phần tử sinh nhỏ nhất của Z*73.",
    "id": 14,
    "answer": "5",
    "solution": "72=2³·3². Kiểm tra 5^(72/q)≠1 (mod 73) với các ước nguyên tố q=2,3. Do đó ord_73(5)=72 và 5 là phần tử sinh nhỏ nhất.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Xác định phần tử không phải phần tử sinh của Z*23.",
    "id": 15,
    "answer": "Cần các lựa chọn của đề. Các phần tử sinh của Z*23 là: 5, 7, 10, 11, 14, 15, 17, 19, 20, 21.",
    "solution": "Một phần tử không nằm trong tập trên thì không phải phần tử sinh. Danh sách trước không lưu các phương án trắc nghiệm nên chưa thể chọn đúng một đáp án.",
    "status": "THIẾU PHƯƠNG ÁN GỐC"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Xác định phần tử không phải phần tử sinh của Z*41.",
    "id": 16,
    "answer": "Cần các lựa chọn của đề. Các phần tử sinh của Z*41 là: 6, 7, 11, 12, 13, 15, 17, 19, 22, 24, 26, 28, 29, 30, 34, 35.",
    "solution": "So sánh các lựa chọn đề với tập phần tử sinh trên để chọn phần tử không sinh.",
    "status": "THIẾU PHƯƠNG ÁN GỐC"
  },
  {
    "section": "Cấp và phần tử sinh",
    "question": "Xác định phần tử không phải phần tử sinh của Z*97.",
    "id": 17,
    "answer": "Cần các lựa chọn của đề.",
    "solution": "Với p=97, phần tử sinh phải có cấp 96. Danh sách trước không lưu các phương án trắc nghiệm nên không thể xác định duy nhất đáp án.",
    "status": "THIẾU PHƯƠNG ÁN GỐC"
  },
  {
    "section": "Caesar",
    "question": "Alice dùng mã dịch vòng để mã hóa THIGIUAKI với k=19. Tìm bản mã.",
    "id": 18,
    "answer": "MABZBNTDB",
    "solution": "Dùng A=0,…,Z=25 và y=x+19 mod 26. Mã từng chữ của THIGIUAKI thu được MABZBNTDB.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Affine",
    "question": "Mã hóa bản rõ THANHCONG với khóa (a,b)=(8,5) theo y=ax+b mod 26.",
    "id": 19,
    "answer": "BJFFJVNFB",
    "solution": "Dùng y=8x+5 mod 26, A=0. Mã lần lượt T,H,A,N,H,C,O,N,G → B,J,F,F,J,V,N,F,B. Lưu ý gcd(8,26)=2 nên khóa này không khả nghịch; tuy vậy phép mã hóa theo công thức vẫn tính được.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Affine",
    "question": "Cho O(14)=E(m(12)) và M(12)=E(u(20)). Tìm khóa (a,b).",
    "id": 20,
    "answer": "Khóa hợp lệ: (a,b)=(3,4)",
    "solution": "Hệ: 12a+b≡14, 20a+b≡12 (mod 26). Trừ hai phương trình: 8a≡24 (mod 26). Các nghiệm cho a là 3 và 16; nhưng khóa Affine yêu cầu gcd(a,26)=1 nên chọn a=3. Suy ra b≡14−12·3≡4.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Affine",
    "question": "Cho N(13)=E(U(20)) và X(23)=E(O(14)). Tìm khóa Affine.",
    "id": 21,
    "answer": "Khóa hợp lệ: (a,b)=(7,3)",
    "solution": "Hệ: 20a+b≡13 và 14a+b≡23 (mod 26). Trừ: 6a≡−10≡16. Nghiệm gồm a=7 và 20; chỉ a=7 nguyên tố cùng nhau với 26. Suy ra b≡13−20·7≡3.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Affine",
    "question": "Cho J(9)=E(t(19)) và Q(16)=E(e(4)). Tìm khóa Affine.",
    "id": 22,
    "answer": "(a,b)=(3,4)",
    "solution": "Từ 19a+b≡9 và 4a+b≡16 (mod 26), trừ hai phương trình: 15a≡−7≡19. Nghịch đảo 15 modulo 26 là 7 nên a≡19·7≡3. Suy ra b≡16−4·3≡4.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Vigenère",
    "question": "Cho khóa AND và bản mã BHWTRUFYB. Tìm bản rõ.",
    "id": 23,
    "answer": "BUTTERFLY",
    "solution": "Giải mã Vigenère bằng P_i=C_i−K_i mod 26, lặp khóa AND trên 9 ký tự. Kết quả BHWTRUFYB → BUTTERFLY.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Autokey",
    "question": "Cho bản mã WGMAZMLZMGZLNXN và mầm khóa ONE. Tìm bản rõ.",
    "id": 24,
    "answer": "ITISGETTINGDARK",
    "solution": "Giải 3 ký tự đầu bằng mầm khóa ONE, sau đó dùng chính các ký tự bản rõ vừa khôi phục để kéo dài khóa. Kết quả là ITISGETTINGDARK.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Autokey",
    "question": "Mã hóa Unstoppable với mầm khóa Sia.",
    "id": 25,
    "answer": "MVSNBHIOQAE",
    "solution": "Bỏ khoảng trắng, bản rõ UNSTOPPABLE. Dòng khóa autokey bắt đầu SIA rồi nối bản rõ: SIAUNSTOPP… Cộng modulo 26 từng cặp thu được MVSNBHIOQAE.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Autokey",
    "question": "Mã hóa Squid game với mầm khóa sun.",
    "id": 26,
    "answer": "KKHATAIPK",
    "solution": "Bản rõ SQUIDGAME, mầm khóa SUN. Dòng khóa dùng SUNSQU… Cộng từng ký tự modulo 26 cho kết quả KKHATAIPK.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Hill cipher",
    "question": "Bản rõ Monday được mã hóa bằng Hill với m=2 thành OSSNOA. Tìm ma trận khóa.",
    "id": 27,
    "answer": "Có 4 ma trận thỏa dữ kiện theo quy ước A=0, cặp ký tự là vector cột: [[5,19],[8,13]], [[5,19],[21,0]], [[18,6],[8,13]], [[18,6],[21,0]].",
    "solution": "Lập các phương trình K·P=C modulo 26 cho MO→OS, ND→SN, AY→OA. Do ma trận dữ kiện không khả nghịch modulo 26 nên nghiệm không duy nhất. Nếu đề có phương án lựa chọn thì đối chiếu bốn ma trận này.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ – NGHIỆM KHÔNG DUY NHẤT"
  },
  {
    "section": "Hill cipher",
    "question": "Bản rõ Friday được mã hóa thành OBJZMA. Tìm ma trận khóa Hill 2×2.",
    "id": 28,
    "answer": "K = [[5,7],[8,13]]",
    "solution": "Dùng A=0 và vector cột. Từ FR→OB, ID→JZ, AY→MA lập hệ 6 phương trình modulo 26. Giải được a=5,b=7,c=8,d=13.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Hill cipher",
    "question": "Bản rõ Friday được mã hóa thành EBVZEA. Tìm ma trận khóa.",
    "id": 29,
    "answer": "K = [[5,11],[8,13]]",
    "solution": "Lập hệ từ FR→EB, ID→VZ, AY→EA theo K·P=C modulo 26. Giải hệ cho K=[[5,11],[8,13]].",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Hill cipher",
    "question": "Bản rõ Friday được mã hóa thành ADDHOM. Tìm ma trận khóa.",
    "id": 30,
    "answer": "K = [[3,19],[8,7]]",
    "solution": "Lập hệ từ FR→AD, ID→DH, AY→OM và giải modulo 26 thu được K=[[3,19],[8,7]].",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Hill cipher",
    "question": "Alice mã hóa EASY với khóa PDDG. Tìm bản mã.",
    "id": 31,
    "answer": "IMEQ",
    "solution": "PDDG tương ứng ma trận K=[[15,3],[3,6]] với A=0. EASY tách thành EA và SY. K·(4,0)^T=(8,12)^T → IM; K·(18,24)^T=(4,16)^T → EQ. Bản mã IMEQ.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "DES",
    "question": "Cho B5=010011. Tính đầu ra qua S-box tương ứng.",
    "id": 32,
    "answer": "0000",
    "solution": "B5=010011: hàng = bit đầu/cuối = 01₂=1; cột = 1001₂=9. Tra S5[1][9]=0 → 0000.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "DES",
    "question": "Cho B3=110001. Tìm đầu ra qua S-box tương ứng.",
    "id": 33,
    "answer": "0100",
    "solution": "B3=110001: hàng 11₂=3; cột 1000₂=8. S3[3][8]=4 → 0100.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "DES",
    "question": "Cho B1=110100. Tính S1(B1).",
    "id": 34,
    "answer": "1001",
    "solution": "B1=110100: hàng 10₂=2; cột 1010₂=10. S1[2][10]=9 → 1001.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "DES",
    "question": "Cho B1=100011. Tính S1(B1).",
    "id": 35,
    "answer": "1100",
    "solution": "B1=100011: hàng 11₂=3; cột 0001₂=1. S1[3][1]=12 → 1100.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "DES",
    "question": "Cho B1=110101. Tính S1(B1).",
    "id": 36,
    "answer": "0011",
    "solution": "B1=110101: hàng 11₂=3; cột 1010₂=10. S1[3][10]=3 → 0011.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "DES",
    "question": "Trong một vòng DES, cho E(Ri−1) và khóa vòng Ki. Tính E(Ri−1) XOR Ki rồi xác định các bit được yêu cầu.",
    "id": 37,
    "answer": "Thiếu khóa vòng K_i đầy đủ và các vị trí bit cần hỏi.",
    "solution": "Cách làm: XOR từng bit của E(R_{i−1}) với K_i để được 48 bit, chia thành 8 nhóm 6 bit nếu tiếp tục qua S-box. Cần khóa K_i trong ảnh đề để cho kết quả số cụ thể.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "DES",
    "question": "Cho chuỗi đầu vào và bảng hoán vị IP của DES. Tìm các bit a,b,c,d trong IP(x).",
    "id": 38,
    "answer": "Thiếu chuỗi đầu vào và các vị trí a,b,c,d của đề.",
    "solution": "Cách làm: với bảng IP, bit đầu ra thứ j lấy từ vị trí IP[j] của đầu vào. Cần ảnh/bảng gốc để xác định a,b,c,d.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "AES",
    "question": "Tính xtime(D8).",
    "id": 39,
    "answer": "AB₁₆",
    "solution": "D8 có bit cao nhất bằng 1. xtime(D8)=((D8<<1) mod 256) XOR 1B = B0 XOR 1B = AB.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "AES",
    "question": "Tính xtime(92).",
    "id": 40,
    "answer": "3F₁₆",
    "solution": "92 có bit cao nhất bằng 1: (92<<1 mod 256)=24. 24 XOR 1B = 3F.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "AES",
    "question": "Tính xtime(91).",
    "id": 41,
    "answer": "39₁₆",
    "solution": "91 có bit cao nhất bằng 1: (91<<1 mod 256)=22. 22 XOR 1B = 39.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "AES",
    "question": "Tính (23)·(15) trong GF(2^8).",
    "id": 42,
    "answer": "A9₁₆",
    "solution": "Nhân trong GF(2^8) bằng phân rã 15₁₆=00010101₂: 23·15 = 23 ⊕ xtime²(23) ⊕ xtime⁴(23) = A9₁₆.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "AES",
    "question": "Tính (03)·(2F) trong GF(2^8) với đa thức m(x)=x^8+x^4+x^3+x+1.",
    "id": 43,
    "answer": "71₁₆",
    "solution": "03·2F = (02·2F) XOR 2F. Vì MSB của 2F bằng 0, 02·2F=5E. 5E XOR 2F = 71.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "AES",
    "question": "Cho State và bảng S-box AES, sau SubBytes tìm (s01,s12,s33).",
    "id": 44,
    "answer": "Thiếu State và bảng S-box cụ thể của câu hỏi.",
    "solution": "Cách làm: với mỗi byte xy, dùng x làm chỉ số hàng và y làm chỉ số cột trong AES S-box. Cần các byte s01,s12,s33 ban đầu để tính.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "AES",
    "question": "Cho State và bảng S-box AES, sau SubBytes tìm (s31,s12).",
    "id": 45,
    "answer": "Thiếu State của đề.",
    "solution": "Tra từng byte cần thiết trong AES S-box theo nibble cao/thấp. Danh sách trước không lưu State ban đầu.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "AES",
    "question": "Cho State, sau ShiftRows tìm (s31,s22).",
    "id": 46,
    "answer": "Thiếu State của đề.",
    "solution": "ShiftRows: hàng 0 giữ nguyên; hàng 1 dịch trái 1; hàng 2 dịch trái 2; hàng 3 dịch trái 3. Cần State ban đầu để cho s31,s22 cụ thể.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "AES",
    "question": "Cho State, sau ShiftRows tìm (s21,s32).",
    "id": 47,
    "answer": "Thiếu State của đề.",
    "solution": "Áp dụng ShiftRows theo số vị trí bằng chỉ số hàng. Cần State gốc để xác định s21,s32.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "AES",
    "question": "Biết RC[8]=(80)16. Tính RC[9].",
    "id": 48,
    "answer": "1B₁₆",
    "solution": "RC[9]=xtime(RC[8])=xtime(80)=00 XOR 1B=1B.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "AES",
    "question": "Biết RC[2]=(02)16. Tính RC[5].",
    "id": 49,
    "answer": "10₁₆",
    "solution": "RC[3]=04, RC[4]=08, RC[5]=10, mỗi bước lấy xtime của hằng số trước.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "RSA",
    "question": "Cho p=31, q=17, e=7 và bản rõ x=301. Tìm bản mã c=x^e mod n.",
    "id": 50,
    "answer": "517",
    "solution": "n=31·17=527. Mã hóa c=301^7 mod 527. Dùng bình phương-nhân cho kết quả c=517.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "RSA",
    "question": "Cho p=37, q=19, e=307 và c=131. Tìm bản rõ.",
    "id": 51,
    "answer": "17",
    "solution": "n=37·19=703; φ(n)=36·18=648. d=307^−1 mod 648=19. m=131^19 mod 703=17.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "RSA",
    "question": "Cho p=29, q=13, e=5 và c=301. Tìm bản rõ.",
    "id": 52,
    "answer": "32",
    "solution": "n=29·13=377; φ(n)=28·12=336. d=5^−1 mod 336=269. m=301^269 mod 377=32.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "RSA",
    "question": "Cho p=37, q=41, e=211, d=1051 và c=237. Tìm bản rõ.",
    "id": 53,
    "answer": "1034",
    "solution": "Đề đã cho d=1051. Tính m=237^1051 mod 1517=1034.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "RSA",
    "question": "Cho p=19, q=43, e=5. Tính số điểm bất động của RSA.",
    "id": 54,
    "answer": "9 điểm bất động",
    "solution": "Điểm bất động thỏa x^5≡x (mod pq). Theo CRT, số nghiệm bằng tích số nghiệm modulo 19 và 43. Với mỗi số nguyên tố, x(x^4−1)=0 có 3 nghiệm vì gcd(4,p−1)=2? Kiểm tra trực tiếp/CRT cho tổng cộng 9 nghiệm: 0,1,171,172,343,474,645,646,816.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Chữ ký RSA",
    "question": "Cho p=31, q=23, d=223 và thông điệp m=439. Tính chữ ký và kiểm tra tính hợp lệ.",
    "id": 55,
    "answer": "Chữ ký s=284; khóa kiểm tra e=367; xác minh cho lại m=439.",
    "solution": "n=31·23=713, φ=30·22=660. Từ d=223 suy ra e=223^−1 mod 660=367. Ký: s=439^223 mod 713=284. Kiểm tra: 284^367 mod 713=439 nên chữ ký hợp lệ.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ElGamal",
    "question": "Trên Z*113, cho α=3, khóa bí mật a=86. Tính β=3^86 mod 113 và khóa công khai.",
    "id": 56,
    "answer": "β=22; khóa công khai (113,3,22)",
    "solution": "Tính β=3^86 mod 113 bằng bình phương-nhân, được 22.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ElGamal",
    "question": "Cho p=211, α=39, a=93. Tính khóa công khai β=α^a mod p.",
    "id": 57,
    "answer": "β=146; khóa công khai (211,39,146)",
    "solution": "Tính 39^93 mod 211=146.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ElGamal",
    "question": "Cho khóa công khai (p,α,β)=(211,41,89), k=33, m=56. Tính y2.",
    "id": 58,
    "answer": "y₂=192 (và y₁=28)",
    "solution": "ElGamal: y1=α^k mod p=41^33 mod 211=28. y2=m·β^k mod p=56·89^33 mod 211=192.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ElGamal",
    "question": "Cho khóa công khai (p,α,β)=(211,149,133), k=78, m=85. Tính y2.",
    "id": 59,
    "answer": "y₂=110 (và y₁=82)",
    "solution": "y1=149^78 mod 211=82. y2=85·133^78 mod 211=110.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Merkle–Hellman",
    "question": "Cho S=517 và dãy 14,20,39,77,153,305,609. Tìm vector nhị phân (v1,…,v7) sao cho S=Σviwi.",
    "id": 60,
    "answer": "(0,1,1,0,1,1,0)",
    "solution": "Giải dãy siêu tăng từ phải sang trái: 609>517 →0; 305≤517 →1, còn212; 153≤212 →1, còn59; 77>59 →0; 39≤59 →1, còn20; 20→1, còn0; 14→0.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Merkle–Hellman",
    "question": "Cho khóa công khai a=(18024,14729,22250,27242,8040,13905,31851,29355,15977) và bản rõ x=011011101. Tính bản mã.",
    "id": 61,
    "answer": "106752",
    "solution": "Với x=011011101, cộng các a_i tại vị trí bit 1: a2+a3+a5+a6+a7+a9 = 14729+22250+8040+13905+31851+15977 = 106752.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Merkle–Hellman",
    "question": "Cho π(1)=4, π(2)=5, π(3)=2, π(4)=1, π(5)=6, π(6)=3; dãy siêu tăng (12,17,33,64,137,326) cùng W,M. Tính khóa công khai.",
    "id": 62,
    "answer": "Thiếu W và M.",
    "solution": "Công thức: trước hết tính b_i=W·M_i mod M, sau đó áp dụng hoán vị π theo đúng quy ước của slide để tạo dãy khóa công khai. Không thể ra số khi W,M không có trong dữ kiện đã lưu.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "Rabin",
    "question": "Cho p=199, q=211, m=1731. Tính n=pq và c=m² mod n.",
    "id": 63,
    "answer": "n=41989; c=15142",
    "solution": "n=199·211=41989. Mã hóa Rabin: c=1731² mod 41989=15142.",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Rabin",
    "question": "Với p=199, q=211, m=1731, tìm 4 căn bậc hai của c modulo n.",
    "id": 64,
    "answer": "1731, 3841, 38148, 40258",
    "solution": "Giải x²≡15142 mod 199 và mod 211, sau đó ghép các cặp dấu bằng CRT. Bốn nghiệm modulo 41989 là 1731, 3841, 38148, 40258.",
    "status": "ĐÁP ÁN ĐỀ + KIỂM TRA TÍNH TOÁN"
  },
  {
    "section": "Rabin",
    "question": "Xác định các giá trị trung gian a,b,r,s trong thuật toán khai căn Rabin theo dữ kiện đề.",
    "id": 65,
    "answer": "Thiếu định nghĩa a,b,r,s và bảng thuật toán của câu gốc.",
    "solution": "Các ký hiệu trung gian phụ thuộc cách trình bày thuật toán Rabin/CRT trong slide. Cần ảnh câu hỏi để điền chính xác.",
    "status": "THIẾU DỮ KIỆN GỐC"
  },
  {
    "section": "ECC",
    "question": "Trên E11(1,6): y²=x³+x+6 mod 11, xác định điểm không thuộc đường cong trong (8,8), (2,8), (5,6), (7,2).",
    "id": 66,
    "answer": "Theo đúng phương trình đã ghi, có 2 điểm không thuộc đường cong: (2,8) và (5,6).",
    "solution": "Kiểm tra y² và x³+x+6 modulo 11. (8,8) và (7,2) thỏa. Với (2,8): y²=9, RHS=5; không thỏa. Với (5,6): y²=3, RHS=4; không thỏa. Nếu đề chỉ cho một đáp án thì cần kiểm tra lại ảnh gốc vì dữ kiện trích có dấu hiệu sai.",
    "status": "PHÁT HIỆN MÂU THUẪN DỮ KIỆN TRÍCH"
  },
  {
    "section": "ECC",
    "question": "Trên y²=x³+x+6 mod 11, cho P=(2,4), Q=(3,5). Tính P+Q.",
    "id": 67,
    "answer": "P+Q=(7,2)",
    "solution": "λ=(5−4)/(3−2)=1 mod 11. x3=1²−2−3≡7. y3=1(2−7)−4≡2. Vậy P+Q=(7,2).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ECC",
    "question": "Cho G=(7,2), nA=3 trên y²=x³+x+6 mod 11. Tính PA=3G.",
    "id": 68,
    "answer": "P_A=3G=(3,5)",
    "solution": "2G: λ=(3·7²+1)/(2·2) mod11 =5·4^−1=4; suy ra 2G=(2,7). Sau đó 3G=2G+G=(2,7)+(7,2)=(3,5).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ECC",
    "question": "Cho G=(2,7), nA=7. Tính PA=7G.",
    "id": 69,
    "answer": "P_A=7G=(7,2)",
    "solution": "Dùng cộng đôi/nhân điểm trên E11(1,6). Tính tuần tự hoặc double-and-add cho 7·(2,7)=(7,2).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ECC",
    "question": "Cho G=(2,7), nA=6. Tính khóa công khai.",
    "id": 70,
    "answer": "P_A=6G=(7,9)",
    "solution": "Áp dụng double-and-add trên đường cong modulo 11: 6·(2,7)=(7,9).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ECC",
    "question": "Cho G=(2,7), nA=3. Tính khóa công khai.",
    "id": 71,
    "answer": "P_A=3G=(8,3)",
    "solution": "Tính 2G rồi cộng thêm G trên E11(1,6); kết quả 3·(2,7)=(8,3).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "ECC",
    "question": "Cho G=(7,2), k=2, PA=(5,2), PM=(3,6) trên y²=x³+x+6 mod 11. Tìm PC=(kG, PM+kPA).",
    "id": 72,
    "answer": "P_C=((2,7),(10,9))",
    "solution": "P1=kG=2(7,2)=(2,7). Tính kP_A=2(5,2), rồi P2=P_M+kP_A=(3,6)+2(5,2)=(10,9).",
    "status": "TÍNH TỪ DỮ KIỆN ĐỀ"
  },
  {
    "section": "Mã hoán vị",
    "question": "Cho mã hoán vị viết bản rõ theo từng hàng thành ma trận n×m rồi lấy các cột làm bản mã. Với n=3, m=4, chọn bản mã đúng.",
    "id": 73,
    "answer": "Thiếu bản rõ và các phương án bản mã.",
    "solution": "Cách làm: ghi bản rõ theo từng hàng vào ma trận 3×4 rồi đọc các cột theo thứ tự quy định. Cần chuỗi bản rõ/phương án gốc để chọn đáp án.",
    "status": "THIẾU DỮ KIỆN GỐC"
  }
];