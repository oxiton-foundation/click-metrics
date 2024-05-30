import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionUtil() {

  interface AccordionObject {
      id: number;
      title: string;
      content: string;
  }

  const AccordionData: AccordionObject[] = [
      {
          id: 0,
          title: "What is Click Matrics?",
          content: "Click Matrics is a versatile platform that gives you all the tools you need to connect with your audiences and customers. With Click Matrics, you get industry-leading link management, dynamic QR Codes, and a customizable Link-in-bio page."
      },
      {
          id: 1,
          title: "What’s the difference between Click Matrics and QR Code Generator?",
          content: "Click Matrics offers more than just QR Code generation; it provides comprehensive link management, including tracking and analytics, as well as custom branding options for both links and QR Codes."
      },
      {
          id: 2,
          title: "How do QR Codes, short links, and Click Matrics Link-in-bio work together?",
          content: "QR Codes and short links created with Click Matrics can be tracked and analyzed for performance. The Link-in-bio page organizes multiple links in one place, each tracked for user engagement."
      },
      {
          id: 3,
          title: "How long does it take Click Matrics to create a link or QR Code?",
          content: "Creating a link or QR Code with Click Matrics is instantaneous. As soon as you input your URL or desired content, Click Matrics generates the shortened link or QR Code immediately."
      },
      {
          id: 4,
          title: "What's the character limit for Click Matrics links?",
          content: "The character limit for Click Matrics links depends on the type of link and your subscription plan. Generally, short links are designed to be concise and easy to share."
      },
      {
          id: 5,
          title: "When did Click Matrics change its look and navigation?",
          content: "Click Matrics regularly updates its interface to improve user experience. The most recent changes include a more intuitive navigation system and enhanced visual design."
      },
      {
          id: 6,
          title: "Where can I learn more about how to use Click Matrics?",
          content: "You can learn more about using Click Matrics through our comprehensive Help Center, which includes tutorials, articles, and video guides."
      },
      {
          id: 7,
          title: "What is the response time/latency when opening a Click Matrics link?",
          content: "Click Matrics links are optimized for fast redirection, ensuring minimal latency and quick access to the destination content."
      }
  ];

  return (
    <div className="flex justify-center px-4 md:px-0">
      <Accordion type="single" collapsible className="w-full max-w-xl text-left">
        {AccordionData.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
