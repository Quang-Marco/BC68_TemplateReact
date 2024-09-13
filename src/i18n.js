import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      signin: "Sign in",
      signup: "Join",
      general: "General",
      home: "Home",
      categories: "Browse categories",
      language: "Language",
      currency: "Currency",

      listCurrency: {
        usd: {
          name: "United States Dollar",
          symbol: "USD - $",
        },
        euro: {
          name: "Euro",
          symbol: "EUR - €",
        },
        pound: {
          name: "British Pound",
          symbol: "GBP - £",
        },
        aud: {
          name: "Australian Dollar",
          symbol: "AUD - A$",
        },
        inr: {
          name: "Indian Rupee",
          symbol: "INR - ₹",
        },
      },

      listDetailsJobs: {
        graphicsDesign: {
          name: "Graphics & Design",
          content: "Designs to make you stand out.",
        },
        digitalMarketing: {
          name: "Digital Marketing",
          content: "Build your brand. Grow your business.",
        },
        writingTranslation: {
          name: "Writing & Translation",
          content: "Get your words across—in any language.",
        },
        videoAnimation: {
          name: "Video & Animation",
          content: "Bring your story to life with creative videos.",
        },
        musicAudio: {
          name: "Music & Audio",
          content: "Don't miss a beat. Bring your sound to life.",
        },
        consulting: {
          name: "Consulting",
          content: "Access experts to accelerate your business.",
        },
        programmingTech: {
          name: "Programming & Tech",
          content: "You think it. A programmer develops it.",
        },
        business: {
          name: "Business",
          content: "Take your business to the next level.",
        },
        aiServices: {
          name: "AI Services",
          content: "Add AI with the help of experts who get it.",
        },
      },

      header: {
        explore: "Explore",
        exploreList: {
          discover: {
            title: "Discover",
            content: "Inspiring projects made on Fiverr",
          },
          community: {
            title: "Community",
            content: "Connect with Fiverr’s team and community",
          },
          guides: {
            title: "Guides",
            content: "In-depth guides covering business topics",
          },
          podcast: {
            title: "Podcast",
            content: "Inside tips from top business minds",
          },
          learn: {
            title: "Learn",
            content: "Professional online courses, led by experts",
          },
          blog: {
            title: "Blog",
            content: "News, information and community stories",
          },
          logoMaker: {
            title: "Logo Maker",
            content: "Create your logo instantly",
          },
        },

        seller: "Become a seller",
        hire: "I'm looking to hire",
        hireDetails:
          "My team needs vetted freelance talent and a premium business solution.",
        proServices: "I want to offer Pro services",
        proServicesDetails:
          "I’d like to work on business projects as a Pro freelancer or agency.",
      },

      banner: {
        title: "Find the right <strong>freelance</strong> service, right away",
        trust: "Trusted by",
      },

      search: {
        header: "What service are you looking for today?",
        banner: "Search for any service...",
      },

      content: {
        popular: "Popular services",
        services: {
          websiteDevelopment: "Website Development",
          logoDesign: "Logo Design",
          seo: "SEO",
          architectureDesign: "Architecture & Interior Design",
          socialMediaMarketing: "Social Media Marketing",
          voiceOver: "Voice Over",
          softwareDevelopment: "Software Development",
          dataScience: "Data Science & ML",
          productPhotography: "Product Photography",
          ecommerceMarketing: "E-Commerce Marketing",
          videoEditing: "Video Editing",
        },

        yourFingertips: "A whole world of freelance talent at your fingertips",
        fingertip: {
          over700Categories: {
            title: "Over 700 categories",
            content:
              "Get results from skilled freelancers from all over the world, for every task, at any price point.",
          },
          clearTransparentPricing: {
            title: "Clear, transparent pricing",
            content:
              "Pay per project or by the hour (Pro). Payments only get released when you approve.",
          },
          qualityWorkDoneFaster: {
            title: "Quality work done faster",
            content:
              "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
          },
          awardWinningSupport: {
            title: "24/7 award-winning support",
            content:
              "Chat with our team to get your questions answered or resolve any issues with your orders.",
          },
        },

        successFiverr: "What success on Fiverr looks like",
        voltelleEyewear:
          "Vontélle Eyewear turns to Fiverr freelancers to bring their vision to life.",
        voltelleServices: "Vontélle’s go-to services",
        success: {
          industrialDesign: "3D Industrial Design",
          ecommerceWebsiteDevelopment: "E-commerce Website Development",
          emailMarketing: "Email Marketing",
          pressReleases: "Press Releases",
          logoDesign: "Logo Design",
        },
      },

      footer: {},
    },
  },

  vi: {
    translation: {
      signin: "Đăng nhập",
      signup: "Đăng ký",
      general: "Tổng quan",
      home: "Trang chủ",
      categories: "Danh mục",
      language: "Ngôn ngữ",
      currency: "Đơn vị tiền tệ",

      listCurrency: {
        usd: {
          name: "Đô la Mỹ",
          symbol: "USD - $",
        },
        euro: {
          name: "Euro",
          symbol: "EUR - €",
        },
        pound: {
          name: "Bảng Anh",
          symbol: "GBP - £",
        },
        aud: {
          name: "Đô la Úc",
          symbol: "AUD - A$",
        },
        inr: {
          name: "Rupee Ấn Độ",
          symbol: "INR - ₹",
        },
      },

      listDetailsJobs: {
        graphicsDesign: {
          name: "Thiết kế & Đồ họa",
          content: "Thiết kế để bạn nổi bật.",
        },
        digitalMarketing: {
          name: "Tiếp thị kỹ thuật số",
          content: "Xây dựng thương hiệu. Phát triển doanh nghiệp.",
        },
        writingTranslation: {
          name: "Viết bài & Dịch thuật",
          content: "Truyền tải thông điệp của bạn ở bất kỳ ngôn ngữ nào.",
        },
        videoAnimation: {
          name: "Video & Hiệu ứng",
          content:
            "Mang câu chuyện của bạn đến với cuộc sống qua những video sáng tạo.",
        },
        musicAudio: {
          name: "Âm nhạc & Âm thanh",
          content:
            "Đừng bỏ lỡ giai điệu. Đưa âm thanh của bạn đến với cuộc sống.",
        },
        consulting: {
          name: "Tư vấn",
          content: "Tiếp cận chuyên gia để thúc đẩy doanh nghiệp của bạn.",
        },
        programmingTech: {
          name: "Lập trình & Công nghệ",
          content: "Bạn nghĩ ra nó. Lập trình viên sẽ phát triển nó.",
        },
        business: {
          name: "Kinh doanh",
          content: "Đưa doanh nghiệp của bạn lên tầm cao mới.",
        },
        aiServices: {
          name: "Trí tuệ nhân tạo",
          content:
            "Đưa trí tuệ nhân tạo vào cuộc sống với sự hỗ trợ từ những chuyên gia.",
        },
      },

      header: {
        explore: "Khám phá",
        exploreList: {
          discover: {
            title: "Khám Phá",
            content: "Những dự án truyền cảm hứng trên Fiverr",
          },
          community: {
            title: "Cộng Đồng",
            content: "Kết nối với đội ngũ và cộng đồng của Fiverr",
          },
          guides: {
            title: "Hướng Dẫn",
            content: "Hướng dẫn chi tiết về các chủ đề kinh doanh",
          },
          podcast: {
            title: "Podcast",
            content: "Mẹo từ những bộ óc kinh doanh hàng đầu",
          },
          learn: {
            title: "Học tập",
            content:
              "Khóa học trực tuyến chuyên nghiệp, dẫn dắt bởi chuyên gia",
          },
          blog: {
            title: "Blog",
            content: "Tin tức, thông tin và câu chuyện cộng đồng",
          },
          logoMaker: {
            title: "Tạo biểu tượng",
            content: "Tạo biểu tượng của bạn ngay lập tức",
          },
        },

        seller: "Trở thành người bán hàng",
        hire: "Tôi đang tìm người thuê",
        hireDetails:
          "Nhóm của tôi cần những người tài năng có thể làm việc tự do đã được kiểm duyệt và một giải pháp kinh doanh cao cấp.",
        proServices: "Tôi muốn cung cấp dịch vụ chuyên nghiệp",
        proServicesDetails:
          "Tôi muốn làm việc trong các dự án kinh doanh với tư cách là một chuyên gia về làm việc tự do hoặc một công ty môi giới.",
      },

      banner: {
        title: "Tìm ngay dịch vụ <strong>tự do</strong> phù hợp",
        trust: "Được tin tưởng bởi:",
      },

      search: {
        header: "Hôm nay bạn đang tìm kiếm dịch vụ nào?",
        banner: "Tìm kiếm bất kỳ dịch vụ nào...",
      },

      content: {
        popular: "Dịch vụ phổ biến",
        services: {
          websiteDevelopment: "Phát triển Website",
          logoDesign: "Thiết kế Logo",
          seo: "Tối ưu hóa tìm kiếm",
          architectureDesign: "Thiết kế Kiến trúc & Nội thất",
          socialMediaMarketing: "Tiếp thị Truyền thông Xã hội",
          voiceOver: "Lồng tiếng",
          softwareDevelopment: "Phát triển Phần mềm",
          dataScience: "Khoa học Dữ liệu & Máy tính",
          productPhotography: "Nhiếp ảnh",
          ecommerceMarketing: "Tiếp thị Thương mại Điện tử",
          videoEditing: "Chỉnh sửa Video",
        },

        yourFingertips: "Một thế giới tự do đáng mơ ước trong tầm tay bạn.",
        fingertip: {
          over700Categories: {
            title: "Hơn 700 danh mục",
            content:
              "Nhận kết quả từ những người làm việc tự do lành nghề trên khắp thế giới, cho mọi nhiệm vụ, với mọi mức giá.",
          },
          clearTransparentPricing: {
            title: "Giá cả rõ ràng, minh bạch",
            content:
              "Thanh toán theo dự án hoặc theo giờ (Pro). Thanh toán chỉ được thực hiện khi bạn chấp thuận.",
          },
          qualityWorkDoneFaster: {
            title: "Hoàn thành công việc nhanh hơn",
            content:
              "Tìm kiếm người làm việc tự do phù hợp nhanh chóng và nhận được công việc tuyệt vời trong thời gian ngắn, bất kì lúc nào.",
          },
          awardWinningSupport: {
            title: "Đội ngũ hỗ trợ 24/7",
            content:
              "Trò chuyện với đội ngũ của chúng tôi để được giải đáp thắc mắc hoặc giải quyết mọi vấn đề liên quan đến đơn hàng của bạn.",
          },
        },

        successFiverr: "Fiverr đã thành công như thế nào",
        voltelleEyewear:
          "Vontélle Eyewear - thương hiệu kính mắt nổi tiếng đã hợp tác với những người làm việc tự do trên Fiverr để biến mục tiêu của họ thành hiện thực.",
        voltelleServices: "Những dịch vụ của Voltelle",
        success: {
          industrialDesign: "Thiết kế Công nghiệp 3D",
          ecommerceWebsiteDevelopment: "Phát triển Website Thương mại Điện tử",
          emailMarketing: "Tiếp thị qua Email",
          pressReleases: "Thông cáo Báo chí",
          logoDesign: "Thiết kế Logo",
        },
      },

      footer: {},
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  // debug: true,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
