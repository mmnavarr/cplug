import httpClient, { useHttpClient } from "../utils/http_client";
import prompts, { Choice, PromptObject } from "prompts";
import marked from "marked";
import TerminalRenderer from "marked-terminal";

// Define custom terminal markdown renderer
marked.setOptions({ renderer: new TerminalRenderer() });

// Types
import { NewsArticles } from "../@types/news";


const plugNews = async (assetKey: string): Promise<void> => {
  try {
    // Map API call to get asset market data
    const { data: newsArticles } = await useHttpClient<NewsArticles>(`v1/news/${assetKey}?page=1&as-markdown`);

    // Console log markdown content of news via terminal renderer for clean syntax display
    const onSubmit = (_: PromptObject, answer: string) => console.log(marked(answer));
    // TODO: Is there a better way to render the markdown content?

    // Construct choices by mapping through articles
    const newsChoices: Choice[] = newsArticles.map((n, i) => ({
      title: `(${i+1}) ${n.title}`,
      description: "🚀",
      value: n.content
    }));
    // Create preselected prompt
    const prompt: PromptObject = {
      type: "select",
      name: "value",
      message: "Select News to View (Ctrl + C to exit)",
      choices: newsChoices,
      initial: 1
    };

    // Call prompts to view news options
    await prompts(prompt, { onSubmit });

  } catch (error) {
		console.log("Please try again.");
    // console.error(error.response.body);
	}
}

export default plugNews;