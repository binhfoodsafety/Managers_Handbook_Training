// Thẻ và câu hỏi được viết từ nội dung slide. s là số slide liên kết.
var STUDY = [
  {
    "cards": [
      {
        "q": "Vai trò quản lý thay đổi thước đo thành công ra sao?",
        "a": "Tập trung hơn vào kết quả của cả nhóm"
      },
      {
        "q": "Quản lý cơ bản cần làm rõ điều gì?",
        "a": "Hướng đi và nguồn lực để đạt mục tiêu"
      },
      {
        "q": "Điều gì thường tạo cam kết bền hơn chức danh?",
        "a": "Ảnh hưởng dựa trên niềm tin"
      },
      {
        "q": "Nhân viên thường cần gì từ người quản lý?",
        "a": "Định hướng, hỗ trợ và cơ hội phát triển"
      },
      {
        "q": "Một cách phù hợp để phát triển năng lực lãnh đạo là gì?",
        "a": "Chọn một hành vi cụ thể để thực hành"
      },
      {
        "q": "Khi thấy quá tải vai trò, bước đầu nên làm gì?",
        "a": "Gọi tên áp lực và tìm nguyên nhân"
      },
      {
        "q": "Cách nào giúp bảo vệ thời gian cho việc quan trọng?",
        "a": "Đặt giờ tập trung, chốt ưu tiên"
      },
      {
        "q": "Khi nhân viên gặp khó, quản lý nên làm gì trước?",
        "a": "Hỏi họ đã hiểu và thử những cách nào"
      },
      {
        "q": "Ở cuộc trò chuyện đầu tiên với nhóm, nên làm gì?",
        "a": "Lắng nghe điều đang hỗ trợ hoặc cản trở công việc"
      },
      {
        "q": "Làm sao giữ trách nhiệm khi giao việc?",
        "a": "Thống nhất kết quả và mốc rà soát"
      },
      {
        "q": "Khi điều gì quan trọng hơn xuất hiện, quản lý nên làm gì?",
        "a": "Nói rõ ưu tiên nào sẽ lùi"
      },
      {
        "q": "Thành công của người quản lý gắn nhất với điều gì?",
        "a": "Khả năng giúp cả nhóm đạt kết quả"
      },
      {
        "q": "Giá trị của quản lý chuyển dịch về đâu?",
        "a": "Khả năng tạo kết quả thông qua cả nhóm"
      }
    ],
    "quiz": [
      {
        "q": "Vai trò quản lý thay đổi thước đo thành công ra sao?",
        "c": "Tập trung hơn vào kết quả của cả nhóm",
        "w": [
          "Tăng số việc tự mình hoàn thành",
          "Giảm giao tiếp với nhân viên",
          "Tránh mọi quyết định khó"
        ],
        "why": "Kết quả của đội ngũ trở thành phần chính trong thành công của người quản lý.",
        "s": 2
      },
      {
        "q": "Quản lý cơ bản cần làm rõ điều gì?",
        "c": "Hướng đi và nguồn lực để đạt mục tiêu",
        "w": [
          "Chức danh của từng người",
          "Mọi chi tiết nhỏ của cách làm",
          "Thành tích cá nhân của quản lý"
        ],
        "why": "Nhóm cần mục tiêu và nguồn lực đủ rõ để phối hợp.",
        "s": 3
      },
      {
        "q": "Điều gì thường tạo cam kết bền hơn chức danh?",
        "c": "Ảnh hưởng dựa trên niềm tin",
        "w": [
          "Mệnh lệnh lặp lại",
          "Kiểm soát mọi thao tác",
          "Quyền quyết định không giải thích"
        ],
        "why": "Người hiểu và tin vào lý do thường chủ động hơn.",
        "s": 4
      },
      {
        "q": "Nhân viên thường cần gì từ người quản lý?",
        "c": "Định hướng, hỗ trợ và cơ hội phát triển",
        "w": [
          "Quản lý làm hộ việc khó",
          "Chỉ nhận chỉ dẫn khi có lỗi",
          "Không cần phản hồi"
        ],
        "why": "Vai trò quản lý gồm hỗ trợ công việc và phát triển nhân viên.",
        "s": 5
      },
      {
        "q": "Một cách phù hợp để phát triển năng lực lãnh đạo là gì?",
        "c": "Chọn một hành vi cụ thể để thực hành",
        "w": [
          "Chờ có chức danh cao hơn",
          "Bắt chước trọn vẹn tính cách người khác",
          "Tránh phản hồi từ nhóm"
        ],
        "why": "Kỹ năng được hình thành qua hành vi cụ thể và luyện tập.",
        "s": 6
      },
      {
        "q": "Khi thấy quá tải vai trò, bước đầu nên làm gì?",
        "c": "Gọi tên áp lực và tìm nguyên nhân",
        "w": [
          "Nhận thêm việc để chứng minh năng lực",
          "Giấu vấn đề khỏi nhóm",
          "Hủy mọi cuộc trao đổi"
        ],
        "why": "Nhận diện nguyên nhân giúp chọn cách ứng phó phù hợp.",
        "s": 7
      },
      {
        "q": "Cách nào giúp bảo vệ thời gian cho việc quan trọng?",
        "c": "Đặt giờ tập trung, chốt ưu tiên",
        "w": [
          "Để lịch trống hoàn toàn",
          "Trả lời mọi yêu cầu ngay",
          "Chỉ làm việc dễ trước"
        ],
        "why": "Thời gian tập trung cần được chủ động bảo vệ.",
        "s": 8
      },
      {
        "q": "Khi nhân viên gặp khó, quản lý nên làm gì trước?",
        "c": "Hỏi họ đã hiểu và thử những cách nào",
        "w": [
          "Lấy việc về làm ngay",
          "Đưa đáp án trước khi nghe",
          "Chờ đến kỳ đánh giá"
        ],
        "why": "Câu hỏi giúp nhân viên suy nghĩ và cho biết hỗ trợ nào cần thiết.",
        "s": 9
      },
      {
        "q": "Ở cuộc trò chuyện đầu tiên với nhóm, nên làm gì?",
        "c": "Lắng nghe điều đang hỗ trợ hoặc cản trở công việc",
        "w": [
          "Thông báo mọi quyết định đã chốt",
          "Cam kết rằng sẽ không có thay đổi",
          "Đánh giá từng cá nhân ngay"
        ],
        "why": "Lắng nghe giúp quản lý hiểu thực tế trước khi hành động.",
        "s": 10
      },
      {
        "q": "Làm sao giữ trách nhiệm khi giao việc?",
        "c": "Thống nhất kết quả và mốc rà soát",
        "w": [
          "Bỏ theo dõi sau khi giao",
          "Kiểm tra liên tục từng phút",
          "Chỉ đánh giá khi hết năm"
        ],
        "why": "Mốc rà soát tạo hỗ trợ và trách nhiệm mà không làm thay.",
        "s": 12
      },
      {
        "q": "Khi điều gì quan trọng hơn xuất hiện, quản lý nên làm gì?",
        "c": "Nói rõ ưu tiên nào sẽ lùi",
        "w": [
          "Âm thầm bỏ việc cũ",
          "Yêu cầu nhóm làm tất cả cùng lúc",
          "Chờ đến hạn mới báo"
        ],
        "why": "Đàm phán ưu tiên giúp nhóm hiểu sự đánh đổi.",
        "s": 15
      },
      {
        "q": "Thành công của người quản lý gắn nhất với điều gì?",
        "c": "Khả năng giúp cả nhóm đạt kết quả",
        "w": [
          "Số giờ làm thêm của quản lý",
          "Số cuộc họp đã chủ trì",
          "Mức độ tự mình kiểm soát mọi việc"
        ],
        "why": "Trọng tâm chuyển từ đóng góp riêng sang kết quả tập thể.",
        "s": 15
      },
      {
        "q": "Nhân viên gặp khó trong việc bạn từng làm nhanh. Bước mở đầu?",
        "c": "Hỏi họ đã thử gì và đang vướng ở đâu",
        "w": [
          "Giành lại việc để bảo đảm tốc độ",
          "Chỉ nói họ cần tự chủ hơn",
          "Chờ kỳ đánh giá cuối năm"
        ],
        "why": "Câu hỏi giúp hiểu trở ngại trước khi can thiệp.",
        "s": 14
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Niềm tin trong quan hệ quản lý cần điều gì?",
        "a": "Phẩm chất nhất quán và năng lực đáng tin"
      },
      {
        "q": "Khi lời hứa có nguy cơ trễ, nên làm gì?",
        "a": "Báo sớm, nêu nguyên nhân và thống nhất bước mới"
      },
      {
        "q": "Điều gì giúp nhân viên an tâm nêu rủi ro?",
        "a": "Quản lý phản hồi bình tĩnh và xử lý thông tin"
      },
      {
        "q": "Khi quản lý đồng nghiệp cũ, cần chú ý điều gì?",
        "a": "Làm rõ vai trò và áp dụng nguyên tắc công bằng"
      },
      {
        "q": "Tự nhận thức bắt đầu bằng việc gì?",
        "a": "Nhận ra cảm xúc và suy nghĩ đang xuất hiện"
      },
      {
        "q": "Khi đang nóng giận trong trao đổi, lựa chọn nào có ích?",
        "a": "Tạm dừng và làm rõ điều cần đạt"
      },
      {
        "q": "Thấu cảm có đồng nghĩa với đồng ý không?",
        "a": "Không, vẫn có thể giữ tiêu chuẩn công việc"
      },
      {
        "q": "Cách nào giúp nhận diện trạng thái của nhóm?",
        "a": "Quan sát sự tham gia và hỏi riêng khi phù hợp"
      },
      {
        "q": "Khi có sai sót, nên tập trung vào điều gì?",
        "a": "Sự việc và điểm kiểm soát có thể cải thiện"
      },
      {
        "q": "Một phản hồi trái chiều trong cuộc họp nên được xử lý thế nào?",
        "a": "Nghe hết và hỏi căn cứ, tác động dự kiến"
      },
      {
        "q": "Đóng vòng phản hồi nghĩa là gì?",
        "a": "Nói lại điều đã thay đổi và điều chưa thể làm"
      },
      {
        "q": "Điều gì củng cố uy tín sau khi mắc lỗi?",
        "a": "Nhận trách nhiệm và khắc phục rõ ràng"
      },
      {
        "q": "An toàn tâm lý giúp thành viên làm gì?",
        "a": "Nêu vấn đề mà không sợ bị làm nhục"
      }
    ],
    "quiz": [
      {
        "q": "Niềm tin trong quan hệ quản lý cần điều gì?",
        "c": "Phẩm chất nhất quán và năng lực đáng tin",
        "w": [
          "Chức danh và thâm niên",
          "Lời hứa lớn và quyết đoán",
          "Thân thiện nhưng né trách nhiệm"
        ],
        "why": "Người khác cần tin cả ý định lẫn khả năng thực hiện.",
        "s": 2
      },
      {
        "q": "Khi lời hứa có nguy cơ trễ, nên làm gì?",
        "c": "Báo sớm, nêu nguyên nhân và thống nhất bước mới",
        "w": [
          "Im lặng đến hạn",
          "Đổ lỗi cho người khác",
          "Hứa thêm một thời hạn chưa kiểm tra"
        ],
        "why": "Minh bạch sớm giúp nhóm điều chỉnh kế hoạch và duy trì uy tín.",
        "s": 3
      },
      {
        "q": "Điều gì giúp nhân viên an tâm nêu rủi ro?",
        "c": "Quản lý phản hồi bình tĩnh và xử lý thông tin",
        "w": [
          "Phạt người nêu vấn đề",
          "Chỉ nhận ý kiến đồng thuận",
          "Bỏ qua lỗi để giữ hòa khí"
        ],
        "why": "Phản ứng của quản lý định hình mức an toàn khi lên tiếng.",
        "s": 4
      },
      {
        "q": "Khi quản lý đồng nghiệp cũ, cần chú ý điều gì?",
        "c": "Làm rõ vai trò và áp dụng nguyên tắc công bằng",
        "w": [
          "Giữ mọi quan hệ như trước",
          "Ưu tiên bạn thân để dễ phối hợp",
          "Tránh nói về kỳ vọng"
        ],
        "why": "Quan hệ mới cần ranh giới minh bạch và đối xử nhất quán.",
        "s": 5
      },
      {
        "q": "Tự nhận thức bắt đầu bằng việc gì?",
        "c": "Nhận ra cảm xúc và suy nghĩ đang xuất hiện",
        "w": [
          "Đoán cảm xúc của người khác",
          "Đưa ra quyết định ngay",
          "Che mọi dấu hiệu căng thẳng"
        ],
        "why": "Nhận ra phản ứng của mình tạo khoảng dừng để lựa chọn cách đáp lại.",
        "s": 6
      },
      {
        "q": "Khi đang nóng giận trong trao đổi, lựa chọn nào có ích?",
        "c": "Tạm dừng và làm rõ điều cần đạt",
        "w": [
          "Gửi lời trách móc ngay",
          "Rút lại mọi yêu cầu",
          "Kết thúc quan hệ làm việc"
        ],
        "why": "Tạm dừng giúp tránh phản ứng bốc đồng và quay lại mục tiêu.",
        "s": 7
      },
      {
        "q": "Thấu cảm có đồng nghĩa với đồng ý không?",
        "c": "Không, vẫn có thể giữ tiêu chuẩn công việc",
        "w": [
          "Có, phải chấp nhận mọi yêu cầu",
          "Có, không cần trao đổi kết quả",
          "Không, nên tránh lắng nghe"
        ],
        "why": "Hiểu góc nhìn giúp phản hồi tốt hơn mà không bỏ trách nhiệm.",
        "s": 8
      },
      {
        "q": "Cách nào giúp nhận diện trạng thái của nhóm?",
        "c": "Quan sát sự tham gia và hỏi riêng khi phù hợp",
        "w": [
          "Dán nhãn tính cách từ một sự việc",
          "Chỉ hỏi người nói nhiều",
          "Chờ đến khi có nghỉ việc"
        ],
        "why": "Quan sát và trao đổi tạo thêm dữ kiện trước khi kết luận.",
        "s": 9
      },
      {
        "q": "Khi có sai sót, nên tập trung vào điều gì?",
        "c": "Sự việc và điểm kiểm soát có thể cải thiện",
        "w": [
          "Tìm người để quy lỗi trước",
          "Giấu sự cố khỏi nhóm",
          "Kết luận người mắc lỗi thiếu năng lực"
        ],
        "why": "Phân tích quy trình giúp giảm khả năng lặp lại sai sót.",
        "s": 10
      },
      {
        "q": "Một phản hồi trái chiều trong cuộc họp nên được xử lý thế nào?",
        "c": "Nghe hết và hỏi căn cứ, tác động dự kiến",
        "w": [
          "Ngắt lời để giữ quyền lực",
          "Đồng ý ngay để tránh căng thẳng",
          "Gạt bỏ vì người nói ít thâm niên"
        ],
        "why": "Lắng nghe và kiểm tra thông tin giúp quyết định tốt hơn.",
        "s": 11
      },
      {
        "q": "Đóng vòng phản hồi nghĩa là gì?",
        "c": "Nói lại điều đã thay đổi và điều chưa thể làm",
        "w": [
          "Thu thập góp ý rồi im lặng",
          "Chuyển mọi quyết định cho nhóm",
          "Chỉ ghi biên bản cuộc họp"
        ],
        "why": "Người góp ý cần biết thông tin của họ được xử lý ra sao.",
        "s": 4
      },
      {
        "q": "Điều gì củng cố uy tín sau khi mắc lỗi?",
        "c": "Nhận trách nhiệm và khắc phục rõ ràng",
        "w": [
          "Che giấu để tránh mất mặt",
          "Tìm người khác nhận lỗi",
          "Thay đổi tiêu chuẩn sau sự việc"
        ],
        "why": "Sửa sai minh bạch cho thấy hành động phù hợp với giá trị đã nêu.",
        "s": 3
      },
      {
        "q": "Thành viên nêu rủi ro. Phản ứng nào khuyến khích học hỏi?",
        "c": "Cảm ơn, hỏi dữ kiện và đánh giá tác động",
        "w": [
          "Hỏi ai cho phép làm chậm cuộc họp",
          "Bác bỏ vì chưa có giải pháp",
          "Chờ họp xong rồi phê bình"
        ],
        "why": "Mở đường cho thông tin quan trọng đồng thời đánh giá thực tế.",
        "s": 13
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Mục tiêu nhóm nên bắt đầu từ đâu?",
        "a": "Ưu tiên và nhu cầu của tổ chức"
      },
      {
        "q": "Muốn hiểu chiến lược, nên hỏi điều gì?",
        "a": "Tổ chức tập trung vào đâu và vì sao"
      },
      {
        "q": "Một mục tiêu nhóm hữu ích cần gì?",
        "a": "Kết quả, người chịu trách nhiệm và nhịp rà soát"
      },
      {
        "q": "Khi lập kế hoạch, giả định là gì?",
        "a": "Điều cần đúng để kế hoạch có thể thành công"
      },
      {
        "q": "Ảnh hưởng cá nhân được xây dựng thế nào?",
        "a": "Hiểu mối quan tâm và kết nối với mục tiêu chung"
      },
      {
        "q": "Khi hai yêu cầu từ cấp trên xung đột, nên làm gì?",
        "a": "Nêu sự đánh đổi và đề nghị thứ tự ưu tiên"
      },
      {
        "q": "Cách nào giúp hợp tác với đồng cấp?",
        "a": "Hiểu ưu tiên của họ và thống nhất cam kết cụ thể"
      },
      {
        "q": "Một đề xuất thuyết phục nên mở đầu bằng gì?",
        "a": "Nhu cầu hoặc vấn đề người nghe quan tâm"
      },
      {
        "q": "Mạng lưới nghề nghiệp hữu ích nhất khi nào?",
        "a": "Được xây dựng đều đặn qua trao đổi hai chiều"
      },
      {
        "q": "Khi nhóm khác chưa ủng hộ dự án, bước đầu phù hợp là gì?",
        "a": "Tìm hiểu mục tiêu và khó khăn của họ"
      },
      {
        "q": "Thông tin rủi ro nên được chia sẻ khi nào?",
        "a": "Sớm, kèm lựa chọn hoặc phương án xử lý"
      },
      {
        "q": "Một yêu cầu rõ ràng trong đề xuất là gì?",
        "a": "Quyết định hoặc nguồn lực cần ở bước tiếp theo"
      },
      {
        "q": "Lựa chọn chiến lược cần nêu gì ngoài việc sẽ làm?",
        "a": "Điều gì ưu tiên và điều gì tạm gác"
      }
    ],
    "quiz": [
      {
        "q": "Mục tiêu nhóm nên bắt đầu từ đâu?",
        "c": "Ưu tiên và nhu cầu của tổ chức",
        "w": [
          "Sở thích cá nhân của quản lý",
          "Danh sách việc của năm trước",
          "Chỉ số dễ đo nhất"
        ],
        "why": "Nhóm cần biết công việc đóng góp thế nào vào hướng đi chung.",
        "s": 2
      },
      {
        "q": "Muốn hiểu chiến lược, nên hỏi điều gì?",
        "c": "Tổ chức tập trung vào đâu và vì sao",
        "w": [
          "Ai có chức danh cao nhất",
          "Nhóm nào có nhiều nhân viên nhất",
          "Việc nào dễ hoàn thành nhất"
        ],
        "why": "Hiểu lựa chọn và lý do giúp nhóm định hướng đóng góp.",
        "s": 3
      },
      {
        "q": "Một mục tiêu nhóm hữu ích cần gì?",
        "c": "Kết quả, người chịu trách nhiệm và nhịp rà soát",
        "w": [
          "Chỉ một khẩu hiệu truyền cảm hứng",
          "Danh sách mọi hoạt động có thể làm",
          "Thời hạn nhưng không có người phụ trách"
        ],
        "why": "Các yếu tố này giúp mục tiêu chuyển thành công việc có thể theo dõi.",
        "s": 4
      },
      {
        "q": "Khi lập kế hoạch, giả định là gì?",
        "c": "Điều cần đúng để kế hoạch có thể thành công",
        "w": [
          "Kết quả đã được xác nhận",
          "Một nhiệm vụ thường ngày",
          "Cam kết của người phê duyệt"
        ],
        "why": "Giả định cần được nêu để kiểm tra, vì chúng chưa chắc đúng.",
        "s": 5
      },
      {
        "q": "Ảnh hưởng cá nhân được xây dựng thế nào?",
        "c": "Hiểu mối quan tâm và kết nối với mục tiêu chung",
        "w": [
          "Dùng chức danh để buộc đồng ý",
          "Giữ lại thông tin có lợi",
          "Chỉ tìm người liên quan khi cần favor"
        ],
        "why": "Trao đổi hai chiều giúp đề xuất phù hợp và tạo đồng thuận.",
        "s": 6
      },
      {
        "q": "Khi hai yêu cầu từ cấp trên xung đột, nên làm gì?",
        "c": "Nêu sự đánh đổi và đề nghị thứ tự ưu tiên",
        "w": [
          "Làm cả hai mà không báo",
          "Tự bỏ yêu cầu khó hơn",
          "Chờ đến khi trễ hạn"
        ],
        "why": "Làm rõ giới hạn giúp cấp trên chọn cách sử dụng nguồn lực.",
        "s": 7
      },
      {
        "q": "Cách nào giúp hợp tác với đồng cấp?",
        "c": "Hiểu ưu tiên của họ và thống nhất cam kết cụ thể",
        "w": [
          "Giả định mục tiêu hai nhóm giống nhau",
          "Chuyển toàn bộ việc khó sang nhóm kia",
          "Chỉ liên hệ khi cần phê duyệt"
        ],
        "why": "Hợp tác cần lợi ích chung và trách nhiệm rõ ràng.",
        "s": 8
      },
      {
        "q": "Một đề xuất thuyết phục nên mở đầu bằng gì?",
        "c": "Nhu cầu hoặc vấn đề người nghe quan tâm",
        "w": [
          "Tiểu sử người đề xuất",
          "Danh sách chi tiết kỹ thuật",
          "Kết luận không kèm bối cảnh"
        ],
        "why": "Bắt đầu bằng nhu cầu giúp người nghe hiểu vì sao cần chú ý.",
        "s": 9
      },
      {
        "q": "Mạng lưới nghề nghiệp hữu ích nhất khi nào?",
        "c": "Được xây dựng đều đặn qua trao đổi hai chiều",
        "w": [
          "Chỉ khi cần xin nguồn lực",
          "Khi có thể hứa thay người khác",
          "Khi chủ yếu thu thập thông tin riêng"
        ],
        "why": "Quan hệ đáng tin cậy cần được nuôi dưỡng trước lúc cần giúp đỡ.",
        "s": 10
      },
      {
        "q": "Khi nhóm khác chưa ủng hộ dự án, bước đầu phù hợp là gì?",
        "c": "Tìm hiểu mục tiêu và khó khăn của họ",
        "w": [
          "Gửi lại cùng một đề xuất dài hơn",
          "Yêu cầu cấp trên buộc họ tham gia ngay",
          "Bắt đầu dự án mà không báo"
        ],
        "why": "Hiểu động lực giúp thiết kế phương án có lợi cho hai bên.",
        "s": 11
      },
      {
        "q": "Thông tin rủi ro nên được chia sẻ khi nào?",
        "c": "Sớm, kèm lựa chọn hoặc phương án xử lý",
        "w": [
          "Sau khi ảnh hưởng đã xảy ra",
          "Chỉ khi có câu trả lời chắc chắn",
          "Không cần nếu dự án vẫn chạy"
        ],
        "why": "Cập nhật sớm cho người liên quan cơ hội điều chỉnh.",
        "s": 7
      },
      {
        "q": "Một yêu cầu rõ ràng trong đề xuất là gì?",
        "c": "Quyết định hoặc nguồn lực cần ở bước tiếp theo",
        "w": [
          "Lời khen chung cho đội ngũ",
          "Bối cảnh không có đề nghị",
          "Cam kết rằng rủi ro bằng không"
        ],
        "why": "Người nghe cần biết hành động cụ thể nào được đề nghị.",
        "s": 9
      },
      {
        "q": "Nhiều ưu tiên nhưng không nói điều sẽ dừng. Rủi ro?",
        "c": "Nguồn lực chia mỏng, lựa chọn thiếu rõ",
        "w": [
          "Ai cũng tự biết việc quan trọng",
          "Chiến lược tự ổn định hơn",
          "Không cần hỏi bên liên quan"
        ],
        "why": "Không nói điều tạm gác dễ tạo quá nhiều cam kết.",
        "s": 13
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Trước khi viết thông điệp, nên xác định gì?",
        "a": "Người đọc cần hiểu hoặc quyết định điều gì"
      },
      {
        "q": "Cách nào giúp thư công việc dễ xử lý?",
        "a": "Nêu yêu cầu hoặc ý chính ở đầu"
      },
      {
        "q": "Một bài trình bày nên kết thúc bằng gì?",
        "a": "Đề nghị và bước tiếp theo rõ ràng"
      },
      {
        "q": "Điều gì nên có sau cuộc họp?",
        "a": "Quyết định, người phụ trách và thời hạn"
      },
      {
        "q": "Khi sắp xếp công việc, cần cân nhắc gì?",
        "a": "Giá trị của việc và thời điểm cần xử lý"
      },
      {
        "q": "Khung giờ tập trung có tác dụng gì?",
        "a": "Dành thời gian liên tục cho nhiệm vụ quan trọng"
      },
      {
        "q": "Khi nhân viên liên tục hỏi cách xử lý việc nhỏ, nên làm gì?",
        "a": "Hỏi cách họ sẽ xử lý và giao quyền phù hợp"
      },
      {
        "q": "Một cách ứng phó áp lực bền vững là gì?",
        "a": "Giảm áp lực và chủ động phục hồi"
      },
      {
        "q": "Nếu công việc thường xuyên lấn vào thời gian riêng, nên làm gì?",
        "a": "Xem lại khối lượng, giới hạn và cách bàn giao"
      },
      {
        "q": "Một quản lý bị gián đoạn liên tục nên thử gì trước?",
        "a": "Đặt khung tập trung và sàng lọc yêu cầu"
      },
      {
        "q": "Khi nào nên giao lại một việc?",
        "a": "Khi người khác có thể xử lý với hướng dẫn phù hợp"
      },
      {
        "q": "Điều gì giúp duy trì năng suất bền vững?",
        "a": "Kết hợp ưu tiên, tập trung và phục hồi"
      },
      {
        "q": "Cuối cuộc họp hiệu quả, cần xác nhận gì?",
        "a": "Quyết định, người làm và bước tiếp"
      }
    ],
    "quiz": [
      {
        "q": "Trước khi viết thông điệp, nên xác định gì?",
        "c": "Người đọc cần hiểu hoặc quyết định điều gì",
        "w": [
          "Độ dài tối đa của mọi thư",
          "Từ ngữ trang trọng nhất",
          "Số người được sao chép"
        ],
        "why": "Mục đích và người nhận quyết định nội dung cần đưa vào.",
        "s": 2
      },
      {
        "q": "Cách nào giúp thư công việc dễ xử lý?",
        "c": "Nêu yêu cầu hoặc ý chính ở đầu",
        "w": [
          "Để đề nghị ở cuối thư dài",
          "Dùng nhiều thuật ngữ nội bộ",
          "Gộp nhiều chủ đề không liên quan"
        ],
        "why": "Người đọc thấy ngay điều cần chú ý và hành động.",
        "s": 3
      },
      {
        "q": "Một bài trình bày nên kết thúc bằng gì?",
        "c": "Đề nghị và bước tiếp theo rõ ràng",
        "w": [
          "Thông tin mới chưa giải thích",
          "Danh sách mọi dữ liệu đã thu thập",
          "Lời kết không gắn với mục tiêu"
        ],
        "why": "Kết thúc giúp người nghe biết cần làm gì sau phần trình bày.",
        "s": 4
      },
      {
        "q": "Điều gì nên có sau cuộc họp?",
        "c": "Quyết định, người phụ trách và thời hạn",
        "w": [
          "Chỉ danh sách người dự",
          "Bản ghi chép nguyên văn mọi câu nói",
          "Một cuộc họp khác chưa có mục tiêu"
        ],
        "why": "Ghi rõ cam kết giúp biến trao đổi thành hành động.",
        "s": 5
      },
      {
        "q": "Khi sắp xếp công việc, cần cân nhắc gì?",
        "c": "Giá trị của việc và thời điểm cần xử lý",
        "w": [
          "Thứ tự email đến",
          "Ai gửi tin nhắn nhiều nhất",
          "Việc nào ngắn nhất"
        ],
        "why": "Giá trị và thời điểm cho biết nên làm, giao hay thương lượng.",
        "s": 6
      },
      {
        "q": "Khung giờ tập trung có tác dụng gì?",
        "c": "Dành thời gian liên tục cho nhiệm vụ quan trọng",
        "w": [
          "Loại bỏ mọi tình huống khẩn cấp",
          "Bảo đảm không ai liên hệ trong ngày",
          "Thay thế việc lập kế hoạch"
        ],
        "why": "Khoảng tập trung giảm gián đoạn nhưng vẫn cần khoảng đệm.",
        "s": 7
      },
      {
        "q": "Khi nhân viên liên tục hỏi cách xử lý việc nhỏ, nên làm gì?",
        "c": "Hỏi cách họ sẽ xử lý và giao quyền phù hợp",
        "w": [
          "Giữ mọi quyết định ở cấp quản lý",
          "Không phản hồi trong tương lai",
          "Tăng số cuộc họp trạng thái"
        ],
        "why": "Câu hỏi và ranh giới quyết định giúp nhân viên tự chủ hơn.",
        "s": 8
      },
      {
        "q": "Một cách ứng phó áp lực bền vững là gì?",
        "c": "Giảm áp lực và chủ động phục hồi",
        "w": [
          "Kéo dài giờ làm mỗi ngày",
          "Bỏ bữa để tiết kiệm thời gian",
          "Giấu dấu hiệu quá tải"
        ],
        "why": "Giảm nguyên nhân và phục hồi hỗ trợ hiệu quả lâu dài.",
        "s": 9
      },
      {
        "q": "Nếu công việc thường xuyên lấn vào thời gian riêng, nên làm gì?",
        "c": "Xem lại khối lượng, giới hạn và cách bàn giao",
        "w": [
          "Chấp nhận đây là điều không thể đổi",
          "Tắt liên lạc mà không báo",
          "Nhận thêm việc để chứng minh cam kết"
        ],
        "why": "Ranh giới cần đi cùng bàn giao và điều chỉnh nguyên nhân.",
        "s": 10
      },
      {
        "q": "Một quản lý bị gián đoạn liên tục nên thử gì trước?",
        "c": "Đặt khung tập trung và sàng lọc yêu cầu",
        "w": [
          "Bỏ mọi nhiệm vụ dài hạn",
          "Chuyển hết trách nhiệm cho cấp trên",
          "Trả lời nhanh hơn mọi tin nhắn"
        ],
        "why": "Quản lý cần chủ động bảo vệ thời gian và giảm điểm nghẽn.",
        "s": 11
      },
      {
        "q": "Khi nào nên giao lại một việc?",
        "c": "Khi người khác có thể xử lý với hướng dẫn phù hợp",
        "w": [
          "Khi việc không có mục tiêu",
          "Khi muốn né trách nhiệm cuối",
          "Khi hạn đã qua"
        ],
        "why": "Giao quyền giải phóng thời gian và phát triển năng lực.",
        "s": 8
      },
      {
        "q": "Điều gì giúp duy trì năng suất bền vững?",
        "c": "Kết hợp ưu tiên, tập trung và phục hồi",
        "w": [
          "Chỉ tăng số giờ làm",
          "Dùng họp để kiểm soát mọi việc",
          "Luôn đặt lịch kín"
        ],
        "why": "Hiệu quả cần cả lựa chọn công việc lẫn khả năng duy trì năng lượng.",
        "s": 15
      },
      {
        "q": "Sau cuộc họp, mỗi người nhớ một việc khác nhau. Điều gì thiếu?",
        "c": "Xác nhận quyết định, người phụ trách, bước tiếp",
        "w": [
          "Thêm vòng cập nhật miệng",
          "Gửi toàn bộ biên bản cũ",
          "Tăng số người họp"
        ],
        "why": "Khép vòng giúp mọi người rời cuộc họp cùng cách hiểu.",
        "s": 14
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Ai chịu trách nhiệm chính trong việc chủ động phát triển nghề nghiệp?",
        "a": "Chính người lao động"
      },
      {
        "q": "Bản đồ phát triển nên gồm nội dung nào?",
        "a": "Điểm mạnh, khoảng trống và năng lực ưu tiên"
      },
      {
        "q": "Mục tiêu phát triển hữu ích cần gì?",
        "a": "Hành vi cụ thể và dấu hiệu tiến bộ"
      },
      {
        "q": "Ngoài thăng chức, cơ hội phát triển có thể đến từ đâu?",
        "a": "Dự án mới hoặc phối hợp liên nhóm"
      },
      {
        "q": "Câu hỏi phản hồi nào hữu ích hơn?",
        "a": "Hỏi hành vi cụ thể trong tình huống cụ thể"
      },
      {
        "q": "Khi nghe góp ý khó chịu, nên làm gì trước?",
        "a": "Nghe hết và hỏi ví dụ cụ thể"
      },
      {
        "q": "Một người hướng dẫn có thể hỗ trợ gì?",
        "a": "Chia sẻ góc nhìn và cách tiếp cận"
      },
      {
        "q": "Chu trình học qua công việc gồm gì?",
        "a": "Thử, quan sát và rút kinh nghiệm"
      },
      {
        "q": "Khi hoàn cảnh công việc đổi, nên làm gì với mục tiêu?",
        "a": "Rà soát và điều chỉnh cho phù hợp"
      },
      {
        "q": "Muốn luyện dẫn dắt dự án mà chưa có vị trí mới, nên thử gì?",
        "a": "Tìm cơ hội phụ trách một phần dự án thật"
      },
      {
        "q": "Khi nào nên trao đổi mong muốn nghề nghiệp?",
        "a": "Chủ động trao đổi trước lúc cần quyết định gấp"
      },
      {
        "q": "Sau khi thử hành vi mới, bước tiếp theo là gì?",
        "a": "Xin phản hồi và xem kết quả thực tế"
      },
      {
        "q": "Mục tiêu phát triển tốt nên mô tả gì?",
        "a": "Hành vi cụ thể trong một cơ hội thật"
      }
    ],
    "quiz": [
      {
        "q": "Ai chịu trách nhiệm chính trong việc chủ động phát triển nghề nghiệp?",
        "c": "Chính người lao động",
        "w": [
          "Chỉ người quản lý trực tiếp",
          "Bộ phận nhân sự",
          "Đồng nghiệp thân thiết"
        ],
        "why": "Người quản lý hỗ trợ, nhưng cá nhân cần nêu mục tiêu và tìm cơ hội.",
        "s": 2
      },
      {
        "q": "Bản đồ phát triển nên gồm nội dung nào?",
        "c": "Điểm mạnh, khoảng trống và năng lực ưu tiên",
        "w": [
          "Chức danh mong muốn duy nhất",
          "Danh sách khóa học đã tham gia",
          "Đánh giá của một người"
        ],
        "why": "Nội dung này giúp chọn hướng học gắn với mục tiêu.",
        "s": 3
      },
      {
        "q": "Mục tiêu phát triển hữu ích cần gì?",
        "c": "Hành vi cụ thể và dấu hiệu tiến bộ",
        "w": [
          "Một mong muốn chung chung",
          "Một chức danh cao hơn",
          "Một hạn chót không có hoạt động"
        ],
        "why": "Hành vi và bằng chứng giúp biết mình đang tiến bộ hay không.",
        "s": 4
      },
      {
        "q": "Ngoài thăng chức, cơ hội phát triển có thể đến từ đâu?",
        "c": "Dự án mới hoặc phối hợp liên nhóm",
        "w": [
          "Chỉ chờ kỳ đánh giá",
          "Chỉ đổi công ty",
          "Giảm phạm vi trách nhiệm"
        ],
        "why": "Trải nghiệm công việc có thể mở rộng năng lực mà không cần đổi chức danh.",
        "s": 5
      },
      {
        "q": "Câu hỏi phản hồi nào hữu ích hơn?",
        "c": "Hỏi hành vi cụ thể trong tình huống cụ thể",
        "w": [
          "“Tôi có giỏi không?”",
          "“Bạn có thích tôi không?”",
          "“Mọi người có vấn đề gì?”"
        ],
        "why": "Câu hỏi cụ thể giúp người góp ý mô tả việc đã quan sát.",
        "s": 6
      },
      {
        "q": "Khi nghe góp ý khó chịu, nên làm gì trước?",
        "c": "Nghe hết và hỏi ví dụ cụ thể",
        "w": [
          "Giải thích ngay ý định của mình",
          "Bác bỏ vì không đồng ý",
          "Chuyển sang góp ý người khác"
        ],
        "why": "Nghe đủ thông tin giúp phân biệt sự kiện và cách diễn giải.",
        "s": 7
      },
      {
        "q": "Một người hướng dẫn có thể hỗ trợ gì?",
        "c": "Chia sẻ góc nhìn và cách tiếp cận",
        "w": [
          "Quyết định thay mọi lựa chọn",
          "Đảm bảo được thăng chức",
          "Xóa bỏ yêu cầu công việc"
        ],
        "why": "Người hướng dẫn giúp học hỏi, còn trách nhiệm lựa chọn vẫn thuộc cá nhân.",
        "s": 8
      },
      {
        "q": "Chu trình học qua công việc gồm gì?",
        "c": "Thử, quan sát và rút kinh nghiệm",
        "w": [
          "Lập kế hoạch rồi chờ",
          "Đọc tài liệu và kết thúc",
          "Nhận lời khen rồi chuyển việc"
        ],
        "why": "Suy ngẫm sau trải nghiệm giúp biến việc làm thành bài học.",
        "s": 9
      },
      {
        "q": "Khi hoàn cảnh công việc đổi, nên làm gì với mục tiêu?",
        "c": "Rà soát và điều chỉnh cho phù hợp",
        "w": [
          "Giữ nguyên dù không còn liên quan",
          "Bỏ mọi mục tiêu dài hạn",
          "Chờ người khác quyết định"
        ],
        "why": "Kế hoạch nghề nghiệp cần phản ánh ưu tiên mới.",
        "s": 10
      },
      {
        "q": "Muốn luyện dẫn dắt dự án mà chưa có vị trí mới, nên thử gì?",
        "c": "Tìm cơ hội phụ trách một phần dự án thật",
        "w": [
          "Chờ đến khi được thăng chức",
          "Chỉ tham gia khóa học",
          "Yêu cầu đổi chức danh trước"
        ],
        "why": "Nhiệm vụ mở rộng tạo cơ hội thực hành và nhận phản hồi.",
        "s": 11
      },
      {
        "q": "Khi nào nên trao đổi mong muốn nghề nghiệp?",
        "c": "Chủ động trao đổi trước lúc cần quyết định gấp",
        "w": [
          "Chỉ khi đã nghỉ việc",
          "Chỉ vào kỳ đánh giá cuối năm",
          "Sau khi cơ hội đóng lại"
        ],
        "why": "Trao đổi sớm tạo thời gian tìm cơ hội phù hợp.",
        "s": 10
      },
      {
        "q": "Sau khi thử hành vi mới, bước tiếp theo là gì?",
        "c": "Xin phản hồi và xem kết quả thực tế",
        "w": [
          "Giả định đã thành công",
          "Chuyển sang mục tiêu khác ngay",
          "Giữ kín trải nghiệm"
        ],
        "why": "Đánh giá kết quả giúp củng cố hoặc điều chỉnh cách làm.",
        "s": 9
      },
      {
        "q": "“Tôi sẽ giao tiếp tốt hơn” khó đánh giá vì thiếu gì?",
        "c": "Hành vi cụ thể và tình huống để thực hành",
        "w": [
          "Một khóa học bắt buộc",
          "Một chức danh mới",
          "Danh sách phẩm chất chung"
        ],
        "why": "Hành vi thật giúp thử, quan sát và nhận phản hồi.",
        "s": 13
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Ủy quyền hiệu quả cần cân nhắc điều gì?",
        "a": "Việc, người nhận và trách nhiệm cuối"
      },
      {
        "q": "Khi giao một nhiệm vụ, điều nào cần nói rõ?",
        "a": "Kết quả mong đợi và ranh giới quyết định"
      },
      {
        "q": "Vì sao cần hỏi người nhận về tính khả thi?",
        "a": "Để lộ ra trở ngại và nguồn lực còn thiếu"
      },
      {
        "q": "Cách nào hỗ trợ mà không vi mô?",
        "a": "Rà soát theo mốc đã thống nhất"
      },
      {
        "q": "Khi nhân viên xin quyết định nhưng chưa thử phương án, nên hỏi gì?",
        "a": "Bạn đã cân nhắc những lựa chọn nào?"
      },
      {
        "q": "Phản hồi hữu ích mô tả điều gì?",
        "a": "Hành vi quan sát được và tác động"
      },
      {
        "q": "Lời ghi nhận tích cực nên nêu gì?",
        "a": "Đóng góp cụ thể và ảnh hưởng của nó"
      },
      {
        "q": "Trong trao đổi hiệu suất chưa đạt, nên tách điều gì?",
        "a": "Dữ kiện khỏi phỏng đoán về động cơ"
      },
      {
        "q": "Câu hỏi huấn luyện nên có đặc điểm nào?",
        "a": "Mở để người khác khám phá lựa chọn"
      },
      {
        "q": "Một kế hoạch cải thiện cần yếu tố gì?",
        "a": "Thay đổi, hỗ trợ và thời điểm xem lại"
      },
      {
        "q": "Khi nào quản lý cần can thiệp vào việc đã giao?",
        "a": "Khi có rủi ro hoặc vượt quyền hạn đã thống nhất"
      },
      {
        "q": "Để kiểm tra việc giao nhiệm vụ được hiểu đúng, nên làm gì?",
        "a": "Nhờ người nhận tóm tắt kế hoạch của họ"
      },
      {
        "q": "Trước khi trao quyền, điều gì cần làm rõ?",
        "a": "Kết quả, ranh giới và điều phải báo"
      }
    ],
    "quiz": [
      {
        "q": "Ủy quyền hiệu quả cần cân nhắc điều gì?",
        "c": "Việc, người nhận và trách nhiệm cuối",
        "w": [
          "Chỉ người sẵn sàng làm thêm",
          "Việc quản lý không muốn giữ",
          "Cách bỏ trách nhiệm khỏi quản lý"
        ],
        "why": "Giao việc phù hợp cần cân nhắc năng lực và vẫn giữ trách nhiệm của quản lý.",
        "s": 2
      },
      {
        "q": "Khi giao một nhiệm vụ, điều nào cần nói rõ?",
        "c": "Kết quả mong đợi và ranh giới quyết định",
        "w": [
          "Chỉ tên nhiệm vụ",
          "Mọi thao tác nhỏ theo từng phút",
          "Lời hứa chắc chắn sẽ thành công"
        ],
        "why": "Người nhận cần biết mục tiêu và phạm vi tự quyết.",
        "s": 3
      },
      {
        "q": "Vì sao cần hỏi người nhận về tính khả thi?",
        "c": "Để lộ ra trở ngại và nguồn lực còn thiếu",
        "w": [
          "Để chuyển hết trách nhiệm",
          "Để thay đổi mục tiêu tùy ý",
          "Để tránh đặt thời hạn"
        ],
        "why": "Trao đổi giúp kế hoạch thực hiện được trước khi bắt đầu.",
        "s": 4
      },
      {
        "q": "Cách nào hỗ trợ mà không vi mô?",
        "c": "Rà soát theo mốc đã thống nhất",
        "w": [
          "Kiểm tra mọi thao tác liên tục",
          "Không hỏi tiến độ",
          "Nhận lại việc khi có khó khăn"
        ],
        "why": "Mốc theo dõi cung cấp hỗ trợ mà vẫn giữ quyền chủ động.",
        "s": 5
      },
      {
        "q": "Khi nhân viên xin quyết định nhưng chưa thử phương án, nên hỏi gì?",
        "c": "Bạn đã cân nhắc những lựa chọn nào?",
        "w": [
          "Bạn có thể đưa việc này cho ai khác?",
          "Sao bạn lại không biết?",
          "Tôi sẽ làm giúp ngay"
        ],
        "why": "Câu hỏi trả lại trách nhiệm suy nghĩ cho người nhận việc.",
        "s": 6
      },
      {
        "q": "Phản hồi hữu ích mô tả điều gì?",
        "c": "Hành vi quan sát được và tác động",
        "w": [
          "Tính cách cố định của người đó",
          "Tin đồn từ đồng nghiệp",
          "Động cơ mà quản lý suy đoán"
        ],
        "why": "Hành vi và tác động tạo cơ sở cụ thể để trao đổi.",
        "s": 7
      },
      {
        "q": "Lời ghi nhận tích cực nên nêu gì?",
        "c": "Đóng góp cụ thể và ảnh hưởng của nó",
        "w": [
          "Lời khen chung chung",
          "So sánh với người khác",
          "Chỉ số không liên quan"
        ],
        "why": "Cụ thể giúp người nhận hiểu điều nên tiếp tục.",
        "s": 8
      },
      {
        "q": "Trong trao đổi hiệu suất chưa đạt, nên tách điều gì?",
        "c": "Dữ kiện khỏi phỏng đoán về động cơ",
        "w": [
          "Kết quả khỏi tiêu chuẩn",
          "Mục tiêu khỏi kế hoạch",
          "Hỗ trợ khỏi trách nhiệm"
        ],
        "why": "Phán đoán động cơ có thể làm lệch cuộc trao đổi.",
        "s": 9
      },
      {
        "q": "Câu hỏi huấn luyện nên có đặc điểm nào?",
        "c": "Mở để người khác khám phá lựa chọn",
        "w": [
          "Chỉ có câu trả lời có hoặc không",
          "Dẫn đến đáp án quản lý đã chọn",
          "Thay người học ra quyết định"
        ],
        "why": "Câu hỏi mở hỗ trợ khả năng tự suy nghĩ.",
        "s": 10
      },
      {
        "q": "Một kế hoạch cải thiện cần yếu tố gì?",
        "c": "Thay đổi, hỗ trợ và thời điểm xem lại",
        "w": [
          "Chỉ một lời nhắc chung",
          "Mục tiêu không có thời hạn",
          "Biện pháp phạt trước khi trao đổi"
        ],
        "why": "Kế hoạch rõ giúp cả hai biết cần làm gì và đánh giá lúc nào.",
        "s": 10
      },
      {
        "q": "Khi nào quản lý cần can thiệp vào việc đã giao?",
        "c": "Khi có rủi ro hoặc vượt quyền hạn đã thống nhất",
        "w": [
          "Khi nhân viên chọn cách khác ý mình",
          "Mỗi khi có cập nhật tiến độ",
          "Khi muốn làm nhanh hơn"
        ],
        "why": "Can thiệp theo ranh giới bảo vệ kết quả mà không tước quyền chủ động.",
        "s": 5
      },
      {
        "q": "Để kiểm tra việc giao nhiệm vụ được hiểu đúng, nên làm gì?",
        "c": "Nhờ người nhận tóm tắt kế hoạch của họ",
        "w": [
          "Gửi lại nguyên văn email",
          "Hỏi “hiểu chưa?” rồi kết thúc",
          "Đợi đến hạn mới kiểm tra"
        ],
        "why": "Tóm tắt giúp phát hiện khác biệt về mục tiêu hoặc kỳ vọng.",
        "s": 15
      },
      {
        "q": "Giao việc lớn cho nhân viên mới. Cách nào cân bằng học và rủi ro?",
        "c": "Phạm vi rõ, xem bản nháp sớm, tăng quyền dần",
        "w": [
          "Để tự quyết hoàn toàn",
          "Duyệt mọi thao tác nhỏ",
          "Giữ việc cho quản lý"
        ],
        "why": "Điểm kiểm sớm hỗ trợ học và phát hiện sai lệch kịp lúc.",
        "s": 14
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Điều gì giúp đội nhóm phối hợp?",
        "a": "Mục tiêu chung và vai trò rõ ràng"
      },
      {
        "q": "Chuẩn mực làm việc nhóm có tác dụng gì?",
        "a": "Làm rõ hành vi trao đổi và xử lý bất đồng"
      },
      {
        "q": "Khác biệt trong đội nhóm có thể giúp gì?",
        "a": "Làm lộ thêm góc nhìn và rủi ro"
      },
      {
        "q": "Khi làm việc từ xa hoặc khác văn hóa, nên làm gì?",
        "a": "Nêu rõ kỳ vọng và kiểm tra cách hiểu"
      },
      {
        "q": "Cách xử lý xung đột mang tính xây dựng là gì?",
        "a": "Tập trung vấn đề, lợi ích chung và bước thử"
      },
      {
        "q": "Một buổi sáng tạo nên bắt đầu bằng gì?",
        "a": "Câu hỏi rõ và ràng buộc thực tế"
      },
      {
        "q": "Trong giai đoạn mở rộng ý tưởng, nên làm gì?",
        "a": "Tạm hoãn phán xét để tạo nhiều lựa chọn"
      },
      {
        "q": "Cách nào giúp nhiều người được lắng nghe?",
        "a": "Cho suy nghĩ độc lập rồi chia sẻ theo lượt"
      },
      {
        "q": "Tiêu chí tuyển dụng nên dựa vào đâu?",
        "a": "Yêu cầu và kết quả của vai trò"
      },
      {
        "q": "Sau khi chọn một ý tưởng, nhóm cần làm gì?",
        "a": "Thống nhất cách thử và đánh giá"
      },
      {
        "q": "Làm sao giảm tranh cãi cá nhân trong buổi ý tưởng?",
        "a": "Nêu lại vấn đề và tiêu chí chung"
      },
      {
        "q": "Điều gì hỗ trợ giữ động lực của nhân viên?",
        "a": "Cơ hội đóng góp, học hỏi và được ghi nhận"
      },
      {
        "q": "Vì sao nên tách nảy ý tưởng khỏi đánh giá?",
        "a": "Để đánh giá sớm không hẹp phương án"
      }
    ],
    "quiz": [
      {
        "q": "Điều gì giúp đội nhóm phối hợp?",
        "c": "Mục tiêu chung và vai trò rõ ràng",
        "w": [
          "Cạnh tranh về thành tích cá nhân",
          "Không cần nêu người ra quyết định",
          "Mọi người tự chọn mục tiêu riêng"
        ],
        "why": "Nhóm cần biết kết quả chung và cách trách nhiệm kết nối.",
        "s": 2
      },
      {
        "q": "Chuẩn mực làm việc nhóm có tác dụng gì?",
        "c": "Làm rõ hành vi trao đổi và xử lý bất đồng",
        "w": [
          "Thay thế mọi mục tiêu công việc",
          "Bảo đảm không bao giờ xung đột",
          "Chỉ áp dụng cho nhân viên mới"
        ],
        "why": "Chuẩn mực định hình cách nhóm làm việc mỗi ngày.",
        "s": 3
      },
      {
        "q": "Khác biệt trong đội nhóm có thể giúp gì?",
        "c": "Làm lộ thêm góc nhìn và rủi ro",
        "w": [
          "Loại bỏ nhu cầu ra quyết định",
          "Bảo đảm mọi ý kiến đều đúng",
          "Giúp tránh trao đổi"
        ],
        "why": "Góc nhìn đa dạng có ích khi mọi người được mời đóng góp.",
        "s": 4
      },
      {
        "q": "Khi làm việc từ xa hoặc khác văn hóa, nên làm gì?",
        "c": "Nêu rõ kỳ vọng và kiểm tra cách hiểu",
        "w": [
          "Giả định mọi người dùng cùng một cách giao tiếp",
          "Chỉ trao đổi với người ở văn phòng",
          "Tránh hỏi lại để không mất thời gian"
        ],
        "why": "Minh bạch giúp giảm hiểu lầm về thời gian và cách phản hồi.",
        "s": 5
      },
      {
        "q": "Cách xử lý xung đột mang tính xây dựng là gì?",
        "c": "Tập trung vấn đề, lợi ích chung và bước thử",
        "w": [
          "Công kích tính cách người bất đồng",
          "Buộc một bên im lặng",
          "Kéo thêm người để chọn phe"
        ],
        "why": "Giữ trao đổi ở vấn đề giúp tìm lựa chọn khả thi.",
        "s": 6
      },
      {
        "q": "Một buổi sáng tạo nên bắt đầu bằng gì?",
        "c": "Câu hỏi rõ và ràng buộc thực tế",
        "w": [
          "Chọn người thắng cuộc",
          "Yêu cầu có ý tưởng ngay không cần bối cảnh",
          "Đánh giá từng ý trước khi nêu"
        ],
        "why": "Bối cảnh giúp nỗ lực sáng tạo hướng vào vấn đề đúng.",
        "s": 7
      },
      {
        "q": "Trong giai đoạn mở rộng ý tưởng, nên làm gì?",
        "c": "Tạm hoãn phán xét để tạo nhiều lựa chọn",
        "w": [
          "Chọn ý đầu tiên ngay",
          "Bác mọi ý khác kế hoạch hiện tại",
          "Chỉ người quản lý được nêu ý"
        ],
        "why": "Tạo thêm lựa chọn trước khi đánh giá giúp nhóm có phương án tốt hơn.",
        "s": 8
      },
      {
        "q": "Cách nào giúp nhiều người được lắng nghe?",
        "c": "Cho suy nghĩ độc lập rồi chia sẻ theo lượt",
        "w": [
          "Chỉ hỏi người nói nhiều",
          "Để người quản lý trả lời thay",
          "Rút ngắn họp bằng cách bỏ góp ý"
        ],
        "why": "Cấu trúc trao đổi cân bằng mức tham gia.",
        "s": 9
      },
      {
        "q": "Tiêu chí tuyển dụng nên dựa vào đâu?",
        "c": "Yêu cầu và kết quả của vai trò",
        "w": [
          "Sự giống nhau với người phỏng vấn",
          "Cảm giác thân thiện duy nhất",
          "Danh tiếng trường học duy nhất"
        ],
        "why": "Tiêu chí liên quan đến công việc hỗ trợ đánh giá công bằng hơn.",
        "s": 10
      },
      {
        "q": "Sau khi chọn một ý tưởng, nhóm cần làm gì?",
        "c": "Thống nhất cách thử và đánh giá",
        "w": [
          "Giữ ý tưởng ở dạng khẩu hiệu",
          "Bỏ qua mọi tiêu chí",
          "Đổi mục tiêu để hợp thức hóa lựa chọn"
        ],
        "why": "Thử nghiệm cho biết ý tưởng có giải quyết đúng vấn đề không.",
        "s": 11
      },
      {
        "q": "Làm sao giảm tranh cãi cá nhân trong buổi ý tưởng?",
        "c": "Nêu lại vấn đề và tiêu chí chung",
        "w": [
          "Chỉ định người thắng tranh luận",
          "Cấm mọi phản biện",
          "Bỏ qua mục tiêu cuộc họp"
        ],
        "why": "Tiêu chí chung giúp trao đổi tập trung vào phương án.",
        "s": 11
      },
      {
        "q": "Điều gì hỗ trợ giữ động lực của nhân viên?",
        "c": "Cơ hội đóng góp, học hỏi và được ghi nhận",
        "w": [
          "Chỉ tăng số lần kiểm tra",
          "Giữ mọi việc thú vị cho quản lý",
          "Không trao đổi về phát triển"
        ],
        "why": "Nhân viên thường gắn bó hơn khi thấy công việc có cơ hội phát triển và đóng góp.",
        "s": 10
      },
      {
        "q": "Nhóm bác bỏ ý tưởng ngay khi vừa nêu. Bạn thử cách nào?",
        "c": "Cho mọi người nghĩ riêng rồi lần lượt chia sẻ",
        "w": [
          "Để quản lý chọn ý đầu",
          "Bỏ qua vấn đề",
          "Chỉ mời người thâm niên"
        ],
        "why": "Nghĩ riêng mở rộng lựa chọn trước khi cả nhóm đánh giá.",
        "s": 13
      }
    ]
  },
  {
    "cards": [
      {
        "q": "Quản lý góp phần vào chiến lược bằng cách nào?",
        "a": "Kết nối việc của nhóm với ưu tiên và đưa dữ liệu thực tế vào trao đổi"
      },
      {
        "q": "Chiến lược bao gồm điều gì?",
        "a": "Lựa chọn và đánh đổi"
      },
      {
        "q": "Sau khi xác định ưu tiên, cần làm gì?",
        "a": "Làm rõ phụ thuộc và rà soát kết quả"
      },
      {
        "q": "Khi dẫn dắt thay đổi, cần giải thích điều gì?",
        "a": "Lý do thay đổi và tác động đến người liên quan"
      },
      {
        "q": "Báo cáo kết quả kinh doanh cho biết điều gì?",
        "a": "Doanh thu, chi phí và kết quả trong một giai đoạn"
      },
      {
        "q": "Báo cáo tình hình tài sản chụp lại điều gì?",
        "a": "Tài sản, nghĩa vụ và phần vốn tại một thời điểm"
      },
      {
        "q": "Báo cáo dòng tiền tập trung vào gì?",
        "a": "Tiền vào, tiền ra và khả năng đáp ứng nghĩa vụ"
      },
      {
        "q": "Ngân sách tốt nên ghi lại điều gì?",
        "a": "Mục tiêu, giả định và cách theo dõi chênh lệch"
      },
      {
        "q": "Đề xuất kinh doanh nên mở bằng gì?",
        "a": "Nhu cầu hoặc cơ hội có căn cứ"
      },
      {
        "q": "Phân tích đề xuất cần nêu gì ngoài lợi ích?",
        "a": "Nguồn lực, chi phí, rủi ro và cách thực hiện"
      },
      {
        "q": "Khi nào nên mời bên liên quan góp ý?",
        "a": "Trước khi phương án đã cố định"
      },
      {
        "q": "Nếu dữ liệu đề xuất chưa đầy đủ, lựa chọn nào hợp lý?",
        "a": "Đề nghị bước thử có phạm vi và cách đánh giá rõ"
      },
      {
        "q": "Vì sao cần kiểm tra giả định?",
        "a": "Quyết định phụ thuộc điều có thể chưa đúng"
      }
    ],
    "quiz": [
      {
        "q": "Quản lý góp phần vào chiến lược bằng cách nào?",
        "c": "Kết nối việc của nhóm với ưu tiên và đưa dữ liệu thực tế vào trao đổi",
        "w": [
          "Chỉ thực hiện mọi yêu cầu đến",
          "Giữ thông tin vận hành trong nhóm",
          "Tập trung vào hoạt động mà không xét kết quả"
        ],
        "why": "Quản lý vừa triển khai ưu tiên vừa chia sẻ hiểu biết từ thực tế.",
        "s": 2
      },
      {
        "q": "Chiến lược bao gồm điều gì?",
        "c": "Lựa chọn và đánh đổi",
        "w": [
          "Chỉ danh sách mục tiêu",
          "Mọi cơ hội cùng lúc",
          "Một dự báo doanh thu"
        ],
        "why": "Chiến lược đòi hỏi tập trung và chấp nhận đánh đổi.",
        "s": 3
      },
      {
        "q": "Sau khi xác định ưu tiên, cần làm gì?",
        "c": "Làm rõ phụ thuộc và rà soát kết quả",
        "w": [
          "Giữ nguyên kế hoạch dù dữ liệu đổi",
          "Để mỗi nhóm tự chọn hướng",
          "Chờ kết thúc năm mới kiểm tra"
        ],
        "why": "Thực thi cần phối hợp và điều chỉnh theo thông tin mới.",
        "s": 4
      },
      {
        "q": "Khi dẫn dắt thay đổi, cần giải thích điều gì?",
        "c": "Lý do thay đổi và tác động đến người liên quan",
        "w": [
          "Chỉ ngày bắt đầu",
          "Chỉ chức danh của người quyết định",
          "Rằng mọi việc sẽ dễ dàng"
        ],
        "why": "Hiểu lý do và tác động giúp người khác tham gia chuyển tiếp.",
        "s": 5
      },
      {
        "q": "Báo cáo kết quả kinh doanh cho biết điều gì?",
        "c": "Doanh thu, chi phí và kết quả trong một giai đoạn",
        "w": [
          "Tài sản, nghĩa vụ và vốn tại một thời điểm",
          "Luồng tiền thu, tiền chi trong giai đoạn",
          "Kế hoạch nguồn lực cho kỳ kinh doanh"
        ],
        "why": "Báo cáo này theo dõi hoạt động trong khoảng thời gian xác định.",
        "s": 6
      },
      {
        "q": "Báo cáo tình hình tài sản chụp lại điều gì?",
        "c": "Tài sản, nghĩa vụ và phần vốn tại một thời điểm",
        "w": [
          "Doanh thu, chi phí và kết quả kinh doanh trong cả năm",
          "Tiền thu, tiền chi và dòng tiền ròng theo kỳ",
          "Mức độ hoàn thành các mục tiêu chiến lược"
        ],
        "why": "Bảng tình hình tài chính phản ánh vị thế tại một thời điểm.",
        "s": 6
      },
      {
        "q": "Báo cáo dòng tiền tập trung vào gì?",
        "c": "Tiền vào, tiền ra và khả năng đáp ứng nghĩa vụ",
        "w": [
          "Lợi nhuận kế toán duy nhất",
          "Giá trị thương hiệu",
          "Mức độ hài lòng của nhóm"
        ],
        "why": "Dòng tiền cho biết khả năng thu và chi tiền thực tế.",
        "s": 6
      },
      {
        "q": "Ngân sách tốt nên ghi lại điều gì?",
        "c": "Mục tiêu, giả định và cách theo dõi chênh lệch",
        "w": [
          "Con số mục tiêu không giải thích",
          "Mọi chi phí lịch sử",
          "Chỉ khoản đã được phê duyệt"
        ],
        "why": "Giả định và theo dõi giúp hiểu vì sao thực tế khác kế hoạch.",
        "s": 8
      },
      {
        "q": "Đề xuất kinh doanh nên mở bằng gì?",
        "c": "Nhu cầu hoặc cơ hội có căn cứ",
        "w": [
          "Tên phần mềm cần mua",
          "Mức ngân sách mong muốn",
          "Danh sách người ủng hộ"
        ],
        "why": "Người ra quyết định cần hiểu vấn đề trước khi xem giải pháp.",
        "s": 9
      },
      {
        "q": "Phân tích đề xuất cần nêu gì ngoài lợi ích?",
        "c": "Nguồn lực, chi phí, rủi ro và cách thực hiện",
        "w": [
          "Chỉ lựa chọn của người viết",
          "Cam kết không có trở ngại",
          "Lịch họp của nhóm"
        ],
        "why": "Đánh giá có cơ sở cần thấy cả nguồn lực và rủi ro.",
        "s": 10
      },
      {
        "q": "Khi nào nên mời bên liên quan góp ý?",
        "c": "Trước khi phương án đã cố định",
        "w": [
          "Sau khi triển khai xong",
          "Chỉ khi có phản đối",
          "Không cần nếu người quyết định đồng ý"
        ],
        "why": "Tham gia sớm có thể cải thiện phương án và tăng khả năng thực hiện.",
        "s": 10
      },
      {
        "q": "Nếu dữ liệu đề xuất chưa đầy đủ, lựa chọn nào hợp lý?",
        "c": "Đề nghị bước thử có phạm vi và cách đánh giá rõ",
        "w": [
          "Khẳng định lợi ích chắc chắn",
          "Bỏ qua các giả định",
          "Xin ngân sách toàn phần ngay"
        ],
        "why": "Thử có kiểm soát tạo thêm thông tin trước quyết định tiếp theo.",
        "s": 11
      },
      {
        "q": "Dự báo nhu cầu chưa xác nhận. Bước hợp lý?",
        "c": "Kiểm tra giả định, cân nhắc thử nghiệm giới hạn",
        "w": [
          "Bỏ qua rủi ro vì đã dự báo",
          "Cam kết mọi nguồn lực ngay",
          "Xem chi phí sau khi bắt đầu"
        ],
        "why": "Thử giới hạn giúp thu thập thông tin trước cam kết lớn.",
        "s": 14
      }
    ]
  }
];
