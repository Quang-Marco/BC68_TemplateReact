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

        fiverrPro: {
          title:
            "New e-Commerce project management service <strong>made for your business</strong>",
          content:
            "An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.",
          listTitle: "To get started, you should have:",
          list1: "An e-Commerce project requiring expertise in various fields",
          list2: "A budget exceeding $1000",
          list3: "A desire to get things done, without the hassle",
          getStarted: "Get started",
        },

        aboutFiverr: "What they're saying about Fiverr",
        about: {
          name1: "Kay Kim, Co-Founder",
          content1:
            "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
          name2: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
          content2:
            "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
          name3: "Tim and Dan Joo, Co-Founders",
          content3:
            "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
          name4: "Caitlin Tormey, Chief Commercial Officer",
          content4:
            "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
        },
        makeLogo: "Make an incredible logo <strong>in seconds</strong>",
        makeLogoContent: "Pre-designed by top talent. Just add your touch.",
        makeLogoBtn: "Try Fiverr Logo Maker",

        madeOnFiverr: "Made on Fiverr",
        featuredIn: "Featured in:",
        by: "by:",
        albumCoverDesign: "Album Cover Design",
        appDesign: "App Design",
        illustration: "Illustration",
        socialMediaDesign: "Social Media Design",

        guidesHelpYou: "Guides to help you grow",
        seeMore: "See more",
        guide: {
          content1: "Start a side business",
          content2: "Ecommerce business Ideas",
          content3: "Start an online business and work from home",
          content4: "Build a website from scratch",
          content5: "Grow your business with AI",
          content6: "Create a logo for your business",
        },
        freelanceServices:
          "Freelance services at your <strong>fingertips!</strong>",
      },

      footer: {
        categories: {
          title: "Categories",
          content: {
            graphics_design: "Graphics & Design",
            digital_marketing: "Digital Marketing",
            writing_translation: "Writing & Translation",
            video_animation: "Video & Animation",
            music_audio: "Music & Audio",
            fiverr_logo_maker: "Fiverr Logo Maker",
            programming_tech: "Programming & Tech",
            data: "Data",
            business: "Business",
            personal_growth_hobbies: "Personal Growth & Hobbies",
            photography: "Photography",
            finance: "Finance",
            end_to_end_projects: "End-to-End Projects",
            sitemap: "Sitemap",
          },
        },
        about: {
          title: "About",
          content: {
            careers: "Careers",
            press_news: "Press & News",
            partnerships: "Partnerships",
            privacy_policy: "Privacy Policy",
            terms_of_service: "Terms of Service",
            intellectual_property_claims: "Intellectual Property Claims",
            investor_relations: "Investor Relations",
          },
        },
        support_education: {
          title: "Support and Education",
          content: {
            help_support: "Help & Support",
            trust_safety: "Trust & Safety",
            quality_guide: "Quality Guide",
            selling_on_fiverr: "Selling on Fiverr",
            buying_on_fiverr: "Buying on Fiverr",
            fiverr_guides: "Fiverr Guides",
            learn: "Learn",
            online_courses: "Online Courses",
          },
        },
        community: {
          title: "Community",
          content: {
            customer_success_stories: "Customer Success Stories",
            community_hub: "Community Hub",
            forum: "Forum",
            events: "Events",
            blog: "Blog",
            creators: "Creators",
            affiliates: "Affiliates",
            podcast: "Podcast",
            invite_a_friend: "Invite a Friend",
            become_a_seller: "Become a Seller",
            community_standards: "Community Standards",
          },
        },
        business_solutions: {
          title: "Business Solutions",
          content: {
            about_business_solutions: "About Business Solutions",
            fiverr_pro: "Fiverr Pro",
            fiverr_certified: "Fiverr Certified",
            become_an_agency: "Become an Agency",
            fiverr_enterprise: "Fiverr Enterprise",
            clearvoice: "ClearVoice",
            content_marketing: "Content Marketing",
            working_not_working: "Working Not Working",
            contact_sales: "Contact Sales",
          },
        },
      },
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

        fiverrPro: {
          title:
            "Dịch vụ quản lý dự án thương mại điện tử mới <strong>dành cho doanh nghiệp của bạn</strong>",
          content:
            "Một quản lý dự án thương mại điện tử giàu kinh nghiệm sẽ lập kế hoạch, phối hợp và thực hiện dự án của bạn. Họ sẽ giám sát một đội ngũ chuyên gia thương mại điện tử, xử lý mọi thứ từ xây dựng trang web, thiết kế và nội dung đến tối ưu hóa, chiến lược tiếp thị và video do người dùng tạo (UGC).",
          listTitle: "Để bắt đầu, bạn cần có:",
          list1: "Một dự án thương mại điện tử cần chuyên môn ở nhiều lĩnh vực",
          list2: "Ngân sách trên 1000 Đô La",
          list3: "Mong muốn hoàn thành công việc mà không gặp rắc rối",
          getStarted: "Bắt đầu",
        },

        aboutFiverr: "Mọi người nói gì về Fiverr",
        about: {
          name1: "Kay Kim, Đồng sáng lập",
          content1:
            "Thật là thú vị khi Fiverr có các freelancer từ khắp nơi trên thế giới — điều này mở rộng nguồn nhân lực. Một trong những điều tuyệt vời nhất về Fiverr là khi chúng tôi đang ngủ, có người khác đang làm việc.",
          name2: "Brighid Gannon (DNP, PMHNP-BC), Đồng sáng lập",
          content2:
            "Chúng tôi đã sử dụng Fiverr cho SEO, logo, trang web, bản sao, video hoạt hình — mọi thứ. Nó giống như làm việc với một người ngay cạnh bạn hơn là ở nửa kia của thế giới.",
          name3: "Tim và Dan Joo, Đồng sáng lập",
          content3:
            "Khi bạn muốn tạo ra một doanh nghiệp lớn hơn chính mình, bạn cần rất nhiều sự trợ giúp. Đó là những gì Fiverr làm.",
          name4: "Caitlin Tormey, Giám đốc thương mại",
          content4:
            "Chúng tôi đã sử dụng Fiverr cho phát triển web Shopify, thiết kế đồ họa và phát triển web backend. Làm việc với Fiverr giúp công việc của tôi dễ dàng hơn mỗi ngày.",
        },
        makeLogo: "Tạo một logo tuyệt đẹp <strong>chỉ trong vài giây</strong>",
        makeLogoContent:
          "Được thiết kế trước bởi những tài năng hàng đầu. Chỉ cần thêm nét chấm phá của bạn.",
        makeLogoBtn: "Công cụ tạo logo Fiverr",

        madeOnFiverr: "Được thực hiện bởi Fiverr",
        featuredIn: "Nổi bật trong:",
        by: "Thực hiện bởi:",
        albumCoverDesign: "Thiết kế bìa bộ sưu tập",
        appDesign: "Thiết kế ứng dụng",
        illustration: "Minh họa",
        socialMediaDesign: "Minh họa",

        guidesHelpYou: "Hướng dẫn giúp bạn phát triển",
        seeMore: "Xem thêm",
        guide: {
          content1: "Bắt đầu một công việc phụ",
          content2: "Ý tưởng kinh doanh thương mại điện tử",
          content3: "Bắt đầu kinh doanh trực tuyến và làm việc tại nhà",
          content4: "Xây dựng trang web từ đầu",
          content5: "Phát triển doanh nghiệp của bạn với trí tuệ nhân tạo",
          content6: "Tạo logo cho doanh nghiệp của bạn",
        },
        freelanceServices:
          "Dịch vụ làm việc tự do <strong>trong tầm tay bạn!</strong>",
      },

      footer: {
        categories: {
          title: "Danh mục",
          content: {
            graphics_design: "Thiết kế & Đồ họa",
            digital_marketing: "Tiếp thị kỹ thuật số",
            writing_translation: "Viết bài & Dịch thuật",
            video_animation: "Video & Hiệu ứng",
            music_audio: "Âm nhạc & Âm thanh",
            fiverr_logo_maker: "Công cụ tạo logo Fiverr",
            programming_tech: "Lập trình & Công nghệ",
            data: "Dữ liệu",
            business: "Kinh doanh",
            personal_growth_hobbies: "Phát triển cá nhân & Sở thích",
            photography: "Nhiếp ảnh",
            finance: "Tài chính",
            end_to_end_projects: "Dự án End-to-End",
            sitemap: "Sơ đồ trang web",
          },
        },
        about: {
          title: "Về chúng tôi",
          content: {
            careers: "Nghề nghiệp",
            press_news: "Báo chí & Tin tức",
            partnerships: "Đối tác",
            privacy_policy: "Chính sách bảo mật",
            terms_of_service: "Điều khoản dịch vụ",
            intellectual_property_claims: "Yêu cầu quyền sở hữu trí tuệ",
            investor_relations: "Quan hệ nhà đầu tư",
          },
        },
        support_education: {
          title: "Hỗ trợ và Giáo dục",
          content: {
            help_support: "Trợ giúp & Hỗ trợ",
            trust_safety: "Đảm bảo an toàn",
            quality_guide: "Hướng dẫn chất lượng",
            selling_on_fiverr: "Bán hàng trên Fiverr",
            buying_on_fiverr: "Mua hàng trên Fiverr",
            fiverr_guides: "Hướng dẫn Fiverr",
            learn: "Học tập",
            online_courses: "Khóa học trực tuyến",
          },
        },
        community: {
          title: "Cộng đồng",
          content: {
            customer_success_stories: "Câu chuyện thành công của khách hàng",
            community_hub: "Trung tâm cộng đồng",
            forum: "Diễn đàn",
            events: "Sự kiện",
            blog: "Blog",
            creators: "Người sáng tạo",
            affiliates: "Đối tác liên kết",
            podcast: "Podcast",
            invite_a_friend: "Mời bạn bè",
            become_a_seller: "Trở thành người bán",
            community_standards: "Tiêu chuẩn cộng đồng",
          },
        },
        business_solutions: {
          title: "Giải pháp kinh doanh",
          content: {
            about_business_solutions: "Về giải pháp kinh doanh",
            fiverr_pro: "Fiverr Pro",
            fiverr_certified: "Fiverr được chứng nhận",
            become_an_agency: "Trở thành đại lý",
            fiverr_enterprise: "Fiverr Enterprise",
            clearvoice: "ClearVoice",
            content_marketing: "Tiếp thị nội dung",
            working_not_working: "Working Not Working",
            contact_sales: "Liên hệ bán hàng",
          },
        },
      },
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
