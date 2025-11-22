from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate



class ProvideLLM:
    def __init__(self, model="llama3"):
        self.model = model

    def provide_llm(self):
        prompt = ChatPromptTemplate.from_template(
            """You are a multimodal assistant.

                If an image is provided, describe the image in detail and answer the user's question about it.
                If NO image is provided, respond normally to the text input.

                User topic: {topic}
                """
        )
        llm = ChatOllama(model=self.model)
        return prompt, llm
