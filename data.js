window.MMH_DATA = [
  {
    "id": 1,
    "section": "Kiến thức mật mã cơ bản",
    "question": "Mật mã giúp đảm bảo những thuộc tính nào?",
    "answer": "Tính bí mật, tính toàn vẹn và tính xác thực của dữ liệu.",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 2,
    "section": "Kiến thức mật mã cơ bản",
    "question": "Các dịch vụ an toàn tương ứng với kỹ thuật mật mã",
    "answer": "Bí mật → Mã hóa. Toàn vẹn → Chữ ký số, hàm băm, MAC. Xác thực → Chữ ký số, MAC. Chống chối bỏ → Chữ ký số.",
    "source": "SLIDE"
  },
  {
    "id": 3,
    "section": "Kiến thức mật mã cơ bản",
    "question": "Mật mã khóa công khai có thay thế hoàn toàn mật mã khóa bí mật không?",
    "answer": "Không. Hệ mật khóa công khai hỗ trợ thêm và bổ sung cho mật mã khóa bí mật; hai loại cùng tồn tại.",
    "source": "SLIDE"
  },
  {
    "id": 4,
    "section": "Kiến thức mật mã cơ bản",
    "question": "Truyền tin bí mật bằng hệ mật khóa công khai dùng khóa của ai?",
    "answer": "Mã hóa bằng khóa công khai của người nhận; giải mã bằng khóa riêng của người nhận.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 5,
    "section": "Kiến thức mật mã cơ bản",
    "question": "Chữ ký số dùng khóa của ai?",
    "answer": "Người gửi ký bằng khóa riêng; người nhận kiểm tra bằng khóa công khai của người gửi.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 6,
    "section": "Mã cổ điển",
    "question": "Caesar thuộc loại mật mã nào?",
    "answer": "Mã thay thế đơn biểu, cụ thể là mã dịch vòng. Công thức: y = x + k (mod 26).",
    "source": "SLIDE"
  },
  {
    "id": 7,
    "section": "Mã cổ điển",
    "question": "Affine thuộc loại mật mã nào?",
    "answer": "Mã thay thế đơn biểu. y = ax + b (mod 26), với gcd(a,26)=1.",
    "source": "SLIDE"
  },
  {
    "id": 8,
    "section": "Mã cổ điển",
    "question": "Vigenère thuộc loại mật mã nào?",
    "answer": "Mã thay thế đa biểu; dùng nhiều mã Caesar theo các ký tự của từ khóa.",
    "source": "SLIDE"
  },
  {
    "id": 9,
    "section": "Mã cổ điển",
    "question": "Lực lượng khóa của Vigenère",
    "answer": "Nếu độ dài từ khóa là m thì số khóa là 26^m.",
    "source": "SLIDE"
  },
  {
    "id": 10,
    "section": "Mã cổ điển",
    "question": "Lực lượng khóa của mã thay thế đơn biểu",
    "answer": "26! khóa.",
    "source": "SLIDE"
  },
  {
    "id": 11,
    "section": "Mã cổ điển",
    "question": "Vì sao mã thay thế đơn biểu dễ bị phân tích tần suất?",
    "answer": "Mỗi ký tự bản rõ luôn ánh xạ tới một ký tự bản mã nên đặc trưng tần suất của ngôn ngữ vẫn được giữ lại.",
    "source": "SLIDE"
  },
  {
    "id": 12,
    "section": "Mã cổ điển",
    "question": "Vì sao Vigenère chống phân tích tần suất tốt hơn?",
    "answer": "Vì sử dụng nhiều bảng chữ cái / nhiều mã Caesar, làm giảm cấu trúc tần suất của bản rõ trên bản mã.",
    "source": "SLIDE"
  },
  {
    "id": 13,
    "section": "Mã cổ điển",
    "question": "Autokey hoạt động thế nào?",
    "answer": "Từ khóa được nối tiếp bằng chính bản rõ, sau đó mã hóa theo Vigenère.",
    "source": "SLIDE"
  },
  {
    "id": 14,
    "section": "Mã cổ điển",
    "question": "Vernam / OTP thuộc loại nào?",
    "answer": "Mã dòng. eK(x)=x⊕K; dK(y)=y⊕K.",
    "source": "SLIDE"
  },
  {
    "id": 15,
    "section": "Cơ sở toán học",
    "question": "Số nguyên tố là gì?",
    "answer": "Số nguyên a > 1 chỉ có hai ước dương là 1 và chính nó.",
    "source": "SLIDE"
  },
  {
    "id": 16,
    "section": "Cơ sở toán học",
    "question": "Hai số nguyên tố cùng nhau là gì?",
    "answer": "gcd(a,b)=1.",
    "source": "SLIDE"
  },
  {
    "id": 17,
    "section": "Cơ sở toán học",
    "question": "Tính chất Euclid quan trọng",
    "answer": "Nếu a=bq+r thì gcd(a,b)=gcd(b,r).",
    "source": "SLIDE"
  },
  {
    "id": 18,
    "section": "Cơ sở toán học",
    "question": "Khi nào gcd(a,b)=b?",
    "answer": "Khi b>0 và b chia hết a.",
    "source": "SLIDE"
  },
  {
    "id": 19,
    "section": "Cơ sở toán học",
    "question": "Điều kiện tồn tại nghịch đảo modulo",
    "answer": "a có nghịch đảo modulo n khi và chỉ khi gcd(a,n)=1.",
    "source": "SLIDE"
  },
  {
    "id": 20,
    "section": "Zn, Zn* và Euler",
    "question": "Zn là gì?",
    "answer": "Zn={0,1,2,…,n−1}, tập các thặng dư đầy đủ modulo n.",
    "source": "SLIDE"
  },
  {
    "id": 21,
    "section": "Zn, Zn* và Euler",
    "question": "Zn* là gì?",
    "answer": "Zn*={a∈Zn | gcd(a,n)=1}, tập các thặng dư thu gọn.",
    "source": "SLIDE"
  },
  {
    "id": 22,
    "section": "Zn, Zn* và Euler",
    "question": "Định lý Fermat",
    "answer": "Nếu p nguyên tố và gcd(a,p)=1 thì a^(p−1)≡1 (mod p).",
    "source": "SLIDE"
  },
  {
    "id": 23,
    "section": "Zn, Zn* và Euler",
    "question": "Ý nghĩa của φ(n)",
    "answer": "Số các phần tử dương nhỏ hơn n và nguyên tố cùng nhau với n; |Zn*|=φ(n).",
    "source": "SLIDE"
  },
  {
    "id": 24,
    "section": "Zn, Zn* và Euler",
    "question": "φ(p) với p nguyên tố",
    "answer": "φ(p)=p−1.",
    "source": "SLIDE"
  },
  {
    "id": 25,
    "section": "Zn, Zn* và Euler",
    "question": "Khi nào φ(mn)=φ(m)φ(n)?",
    "answer": "Khi gcd(m,n)=1.",
    "source": "SLIDE"
  },
  {
    "id": 26,
    "section": "Zn, Zn* và Euler",
    "question": "Công thức Euler tổng quát",
    "answer": "Nếu n=∏p_i^{e_i}, thì φ(n)=n∏(1−1/p_i).",
    "source": "SLIDE"
  },
  {
    "id": 27,
    "section": "Zn, Zn* và Euler",
    "question": "Định lý Euler",
    "answer": "Nếu a∈Zn* thì a^φ(n)≡1 (mod n).",
    "source": "SLIDE"
  },
  {
    "id": 28,
    "section": "Cấp và phần tử sinh",
    "question": "Cấp của một phần tử là gì?",
    "answer": "ord(a) là số nguyên dương nhỏ nhất t sao cho a^t≡1 (mod n).",
    "source": "SLIDE"
  },
  {
    "id": 29,
    "section": "Cấp và phần tử sinh",
    "question": "Phần tử sinh là gì?",
    "answer": "α là phần tử sinh của Zn* nếu ord(α)=φ(n).",
    "source": "SLIDE"
  },
  {
    "id": 30,
    "section": "Cấp và phần tử sinh",
    "question": "Khi nào Zn* có phần tử sinh?",
    "answer": "Khi n=2, 4, p^k hoặc 2p^k với p là số nguyên tố lẻ.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 31,
    "section": "Cấp và phần tử sinh",
    "question": "Nhóm cyclic là gì trong phần này?",
    "answer": "Zn* là cyclic khi nó có phần tử sinh.",
    "source": "SLIDE"
  },
  {
    "id": 32,
    "section": "Cấp và phần tử sinh",
    "question": "Có bao nhiêu phần tử sinh?",
    "answer": "Nếu Zn* cyclic thì số phần tử sinh là φ(φ(n)).",
    "source": "SLIDE"
  },
  {
    "id": 33,
    "section": "Cấp và phần tử sinh",
    "question": "Từ một phần tử sinh tìm các phần tử sinh còn lại",
    "answer": "Nếu α là phần tử sinh thì α^i mod n cũng là phần tử sinh khi và chỉ khi gcd(i,φ(n))=1.",
    "source": "SLIDE"
  },
  {
    "id": 34,
    "section": "Thặng dư bậc hai – Jacobi – Blum",
    "question": "Thặng dư bậc hai là gì?",
    "answer": "a∈Zn* là thặng dư bậc hai nếu tồn tại x∈Zn* sao cho x²≡a (mod n).",
    "source": "SLIDE"
  },
  {
    "id": 35,
    "section": "Thặng dư bậc hai – Jacobi – Blum",
    "question": "Ký hiệu tập thặng dư bậc hai",
    "answer": "Qn.",
    "source": "SLIDE"
  },
  {
    "id": 36,
    "section": "Thặng dư bậc hai – Jacobi – Blum",
    "question": "Số Blum là gì?",
    "answer": "n=pq với p,q là hai số nguyên tố khác nhau và p≡q≡3 (mod 4).",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 37,
    "section": "Thặng dư bậc hai – Jacobi – Blum",
    "question": "Tính chất quan trọng của số Blum",
    "answer": "Nếu n=pq là số Blum và a∈Qn thì a có 4 căn bậc hai modulo n.",
    "source": "SLIDE"
  },
  {
    "id": 38,
    "section": "Mã khối và mã dòng",
    "question": "Mã dòng có đặc điểm gì?",
    "answer": "Sinh dòng khóa z1,z2,… rồi mã lần lượt các đơn vị của bản rõ.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 39,
    "section": "Mã khối và mã dòng",
    "question": "Mã dòng đồng bộ",
    "answer": "Nếu z_i=f_i(K) thì gọi là mã dòng đồng bộ.",
    "source": "SLIDE"
  },
  {
    "id": 40,
    "section": "Mã khối và mã dòng",
    "question": "Mã dòng tự đồng bộ",
    "answer": "Dòng khóa phụ thuộc vào khóa và một số ký tự bản mã trước đó.",
    "source": "SLIDE"
  },
  {
    "id": 41,
    "section": "Mã khối và mã dòng",
    "question": "DES, AES, RC4, Vernam thuộc loại nào?",
    "answer": "DES/AES: mã khối. RC4/Vernam: mã dòng.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 42,
    "section": "ECB – CBC – CFB – OFB – CTR",
    "question": "ECB",
    "answer": "C_i=E_K(P_i). Các khối mã hóa độc lập; hai khối bản rõ giống nhau dưới cùng khóa cho hai khối bản mã giống nhau.",
    "source": "SLIDE"
  },
  {
    "id": 43,
    "section": "ECB – CBC – CFB – OFB – CTR",
    "question": "CBC",
    "answer": "C_i=E_K(P_i⊕C_{i−1}), với C_{−1}=IV.",
    "source": "SLIDE"
  },
  {
    "id": 44,
    "section": "ECB – CBC – CFB – OFB – CTR",
    "question": "Cùng bản rõ, cùng khóa và cùng IV trong CBC",
    "answer": "Kết quả mã hóa là như nhau. Phát biểu 'sẽ cho khối mã khác nhau' là sai.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 45,
    "section": "ECB – CBC – CFB – OFB – CTR",
    "question": "CFB có thể mã hóa song song không?",
    "answer": "Theo đáp án đề: Không; phát biểu có thể mã hóa song song trong CFB là sai.",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 46,
    "section": "ECB – CBC – CFB – OFB – CTR",
    "question": "OFB",
    "answer": "C_i=P_i⊕O_i, O_i=E_K(O_{i−1}); dòng khóa độc lập với bản rõ.",
    "source": "SLIDE"
  },
  {
    "id": 47,
    "section": "ECB – CBC – CFB – OFB – CTR",
    "question": "CTR",
    "answer": "C_i=E_K(CTR_i)⊕P_i; hỗ trợ mã hóa/giải mã song song và có thể tính trước.",
    "source": "SLIDE"
  },
  {
    "id": 48,
    "section": "DES",
    "question": "DES viết tắt của gì?",
    "answer": "Data Encryption Standard.",
    "source": "SLIDE"
  },
  {
    "id": 49,
    "section": "DES",
    "question": "DES là mã gì?",
    "answer": "Mã khối.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 50,
    "section": "DES",
    "question": "DES có bao nhiêu vòng?",
    "answer": "16 vòng.",
    "source": "SLIDE"
  },
  {
    "id": 51,
    "section": "DES",
    "question": "Kích thước khối DES",
    "answer": "64 bit; sau IP tách thành hai nửa 32 bit.",
    "source": "SLIDE"
  },
  {
    "id": 52,
    "section": "DES",
    "question": "Đầu vào hàm f DES",
    "answer": "32 bit, được mở rộng thành 48 bit rồi XOR với khóa vòng.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 53,
    "section": "DES",
    "question": "Các bước của hàm f",
    "answer": "E → XOR K_i → S-box → P.",
    "source": "SLIDE"
  },
  {
    "id": 54,
    "section": "DES",
    "question": "DES có bao nhiêu S-box?",
    "answer": "8 S-box.",
    "source": "SLIDE"
  },
  {
    "id": 55,
    "section": "DES",
    "question": "Mỗi S-box biến đổi bao nhiêu bit?",
    "answer": "6 bit → 4 bit.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 56,
    "section": "DES",
    "question": "Cấu trúc S-box",
    "answer": "4×16. Hai bit đầu/cuối xác định hàng; 4 bit giữa xác định cột.",
    "source": "SLIDE"
  },
  {
    "id": 57,
    "section": "DES",
    "question": "S-box tuyến tính hay phi tuyến?",
    "answer": "Phi tuyến.",
    "source": "SLIDE"
  },
  {
    "id": 58,
    "section": "DES",
    "question": "Vai trò S-box",
    "answer": "Tạo xáo trộn (confusion), che giấu quan hệ giữa bản rõ và bản mã.",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 59,
    "section": "DES",
    "question": "Lịch dịch khóa DES",
    "answer": "Vòng 1,2,9,16 dịch trái 1 bit; các vòng còn lại dịch trái 2 bit.",
    "source": "SLIDE"
  },
  {
    "id": 60,
    "section": "AES",
    "question": "Kích thước khóa AES",
    "answer": "128, 192 hoặc 256 bit; kích thước khối dữ liệu 128 bit.",
    "source": "SLIDE"
  },
  {
    "id": 61,
    "section": "AES",
    "question": "Số vòng AES",
    "answer": "AES-128: 10 vòng; AES-192: 12 vòng; AES-256: 14 vòng.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 62,
    "section": "AES",
    "question": "Các bước chính trong một vòng AES",
    "answer": "SubBytes → ShiftRows → MixColumns → AddRoundKey.",
    "source": "SLIDE"
  },
  {
    "id": 63,
    "section": "AES",
    "question": "SubBytes",
    "answer": "Phép thay thế phi tuyến theo S-box 16×16.",
    "source": "SLIDE"
  },
  {
    "id": 64,
    "section": "AES",
    "question": "ShiftRows",
    "answer": "Hàng 1 không dịch; hàng 2 dịch trái 1 byte; hàng 3 dịch 2 byte; hàng 4 dịch 3 byte.",
    "source": "SLIDE"
  },
  {
    "id": 65,
    "section": "AES",
    "question": "MixColumns",
    "answer": "Biến đổi từng cột của State bằng phép toán trong GF(2^8).",
    "source": "SLIDE"
  },
  {
    "id": 66,
    "section": "AES",
    "question": "AddRoundKey",
    "answer": "XOR State với khóa vòng; mỗi khóa vòng gồm 4 word.",
    "source": "SLIDE"
  },
  {
    "id": 67,
    "section": "AES",
    "question": "Confusion và diffusion trong AES",
    "answer": "SubBytes tạo phi tuyến/xáo trộn; ShiftRows + MixColumns tạo khuếch tán.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 68,
    "section": "AES",
    "question": "Khóa mở rộng AES-128 có bao nhiêu word?",
    "answer": "44 word.",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 69,
    "section": "RC4",
    "question": "RC4 là mã gì?",
    "answer": "Mã dòng.",
    "source": "SLIDE"
  },
  {
    "id": 70,
    "section": "RC4",
    "question": "Kích thước khóa RC4 theo slide",
    "answer": "40 đến 2048 bit.",
    "source": "SLIDE"
  },
  {
    "id": 71,
    "section": "RC4",
    "question": "Hai thuật toán chính của RC4",
    "answer": "KSA và PRGA.",
    "source": "SLIDE"
  },
  {
    "id": 72,
    "section": "RC4",
    "question": "Mỗi bước RC4 hoán đổi gì?",
    "answer": "Hoán đổi hai phần tử S[i] và S[j].",
    "source": "SLIDE"
  },
  {
    "id": 73,
    "section": "RSA",
    "question": "Độ an toàn RSA dựa trên bài toán gì?",
    "answer": "Bài toán phân tích thừa số nguyên lớn.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 74,
    "section": "RSA",
    "question": "Điều kiện chọn e",
    "answer": "gcd(e,φ(n))=1.",
    "source": "SLIDE"
  },
  {
    "id": 75,
    "section": "RSA",
    "question": "Cách tính d",
    "answer": "d=e^(−1) mod φ(n), hay ed≡1 (mod φ(n)).",
    "source": "SLIDE"
  },
  {
    "id": 76,
    "section": "RSA",
    "question": "Khóa RSA",
    "answer": "Khóa công khai (n,e); khóa bí mật d.",
    "source": "SLIDE"
  },
  {
    "id": 77,
    "section": "RSA",
    "question": "Mã hóa RSA",
    "answer": "y=x^e mod n.",
    "source": "SLIDE"
  },
  {
    "id": 78,
    "section": "RSA",
    "question": "Giải mã RSA",
    "answer": "x=y^d mod n.",
    "source": "SLIDE"
  },
  {
    "id": 79,
    "section": "ElGamal",
    "question": "ElGamal dựa trên bài toán nào?",
    "answer": "Bài toán logarithm rời rạc.",
    "source": "SLIDE"
  },
  {
    "id": 80,
    "section": "ElGamal",
    "question": "Khóa ElGamal",
    "answer": "Khóa công khai (p,α,β), với β=α^a mod p; khóa bí mật a.",
    "source": "SLIDE"
  },
  {
    "id": 81,
    "section": "Merkle–Hellman / Bài toán ba lô",
    "question": "Dãy siêu tăng là gì?",
    "answer": "Mỗi phần tử lớn hơn tổng tất cả các phần tử đứng trước nó.",
    "source": "SLIDE"
  },
  {
    "id": 82,
    "section": "Merkle–Hellman / Bài toán ba lô",
    "question": "Độ phức tạp vét cạn bài toán ba lô tổng quát",
    "answer": "O(2^n).",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 83,
    "section": "Merkle–Hellman / Bài toán ba lô",
    "question": "Độ phức tạp với dãy siêu tăng",
    "answer": "O(n).",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 84,
    "section": "Merkle–Hellman / Bài toán ba lô",
    "question": "Độ an toàn Merkle–Hellman dựa vào đâu?",
    "answer": "Tính khó của bài toán ba lô tổng quát.",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 85,
    "section": "Merkle–Hellman / Bài toán ba lô",
    "question": "Khóa công khai Merkle–Hellman",
    "answer": "a_i=W M_{π(i)} mod M; khóa công khai là dãy (a_1,…,a_n).",
    "source": "SLIDE"
  },
  {
    "id": 86,
    "section": "Rabin",
    "question": "Rabin dựa trên bài toán gì?",
    "answer": "Cùng dạng bài toán khó với RSA: phân tích thừa số.",
    "source": "ĐÁP ÁN"
  },
  {
    "id": 87,
    "section": "Rabin",
    "question": "Khóa Rabin",
    "answer": "Khóa công khai n=pq; khóa bí mật (p,q).",
    "source": "SLIDE"
  },
  {
    "id": 88,
    "section": "Rabin",
    "question": "Mã hóa Rabin",
    "answer": "c=m² mod n.",
    "source": "SLIDE"
  },
  {
    "id": 89,
    "section": "Rabin",
    "question": "Vì sao giải mã Rabin có 4 khả năng?",
    "answer": "Với số Blum, một thặng dư bậc hai có 4 căn bậc hai modulo n.",
    "source": "SLIDE"
  },
  {
    "id": 90,
    "section": "ECC",
    "question": "Phương trình đường cong elliptic trên Zp",
    "answer": "y²=x³+ax+b (mod p), với 4a³+27b²≢0 (mod p).",
    "source": "SLIDE"
  },
  {
    "id": 91,
    "section": "ECC",
    "question": "Kiểm tra điểm thuộc đường cong",
    "answer": "Thay (x,y) vào phương trình; nếu hai vế bằng nhau modulo p thì điểm thuộc đường cong.",
    "source": "SLIDE"
  },
  {
    "id": 92,
    "section": "ECC",
    "question": "Công thức cộng hai điểm",
    "answer": "Nếu P≠Q: λ=(y2−y1)/(x2−x1). Nếu P=Q: λ=(3x1²+a)/(2y1). Sau đó x3=λ²−x1−x2; y3=λ(x1−x3)−y1.",
    "source": "SLIDE"
  },
  {
    "id": 93,
    "section": "ECC",
    "question": "Khóa ECC",
    "answer": "Khóa riêng n_A; khóa công khai P_A=n_A G.",
    "source": "SLIDE"
  },
  {
    "id": 94,
    "section": "ECC",
    "question": "Mã hóa ECC",
    "answer": "P_C=(kG, P_M+kP_A).",
    "source": "SLIDE"
  },
  {
    "id": 95,
    "section": "ECC",
    "question": "Giải mã ECC",
    "answer": "P_M=P_2−n_A P_1.",
    "source": "SLIDE"
  },
  {
    "id": 96,
    "section": "ECC",
    "question": "ECC so với RSA",
    "answer": "Cùng mức an toàn, ECC có độ dài khóa nhỏ hơn RSA.",
    "source": "SLIDE"
  },
  {
    "id": 97,
    "section": "ECC",
    "question": "Độ an toàn ECC dựa vào đâu?",
    "answer": "Bài toán logarithm rời rạc trên đường cong elliptic.",
    "source": "SLIDE"
  },
  {
    "id": 98,
    "section": "Hàm băm",
    "question": "Hàm băm làm gì?",
    "answer": "Ánh xạ thông điệp độ dài tùy ý thành giá trị băm có độ dài cố định.",
    "source": "SLIDE"
  },
  {
    "id": 99,
    "section": "Hàm băm",
    "question": "Hàm băm có cần khóa không?",
    "answer": "Trong mô hình hàm băm thông thường ở slide: không cần khóa.",
    "source": "SLIDE"
  },
  {
    "id": 100,
    "section": "Hàm băm",
    "question": "Kháng tiền ảnh",
    "answer": "Biết y=H(M) thì rất khó tìm M.",
    "source": "SLIDE"
  },
  {
    "id": 101,
    "section": "Hàm băm",
    "question": "Kháng tiền ảnh thứ hai",
    "answer": "Cho M, rất khó tìm M'≠M sao cho H(M')=H(M).",
    "source": "SLIDE"
  },
  {
    "id": 102,
    "section": "Hàm băm",
    "question": "Kháng va chạm mạnh",
    "answer": "Rất khó tìm M≠M' sao cho H(M)=H(M').",
    "source": "SLIDE"
  },
  {
    "id": 103,
    "section": "Hàm băm",
    "question": "Hàm băm hỗ trợ thuộc tính an toàn nào?",
    "answer": "Tính toàn vẹn.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 104,
    "section": "Xác thực thông điệp & chữ ký RSA",
    "question": "Xác thực thông tin liên quan những vấn đề nào?",
    "answer": "Bảo vệ tính toàn vẹn, kiểm chứng danh tính/nguồn gốc và chống chối bỏ.",
    "source": "SLIDE + ĐÁP ÁN"
  },
  {
    "id": 105,
    "section": "Xác thực thông điệp & chữ ký RSA",
    "question": "Khóa dùng trong chữ ký RSA",
    "answer": "Khóa ký k_s=d; khóa xác minh k_v=(n,e).",
    "source": "SLIDE"
  },
  {
    "id": 106,
    "section": "Xác thực thông điệp & chữ ký RSA",
    "question": "Tạo chữ ký RSA",
    "answer": "s=m^d mod n.",
    "source": "SLIDE"
  },
  {
    "id": 107,
    "section": "Xác thực thông điệp & chữ ký RSA",
    "question": "Kiểm tra chữ ký RSA",
    "answer": "Chữ ký hợp lệ nếu m=s^e mod n.",
    "source": "SLIDE"
  },
  {
    "id": 108,
    "section": "Xác thực thông điệp & chữ ký RSA",
    "question": "Chữ ký số có đảm bảo bí mật không?",
    "answer": "Không. Nếu cần bí mật phải kết hợp thêm mã hóa/giải mã.",
    "source": "SLIDE"
  }
];