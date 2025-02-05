import { render, screen } from "@testing-library/react";
import DiscoverAndLearn from "../../pages/edutainment/DiscoverAndLearn";
import * as useEdutainment from "../../hook/edutainment";
import { BrowserRouter } from "react-router-dom";

describe("DiscoverAndLearn", () => {    

    beforeEach(() => {
        vi.clearAllMocks();
    });
    const useEdutainmentSpy = vi.spyOn(useEdutainment, "useEdutainment");

    it("should render the search component", () => {
        render(
            <DiscoverAndLearn />
        );
        expect(
            screen.getByText("Aprende y Diviertete")
        ).toBeInTheDocument();
    });

    it("displays all posts initially", () => {
        const mockPosts = [
            {
                id: 1,
                title: "Bible Verses Section",
                description: "Find inspiring verses to reflect on, strengthen your faith, and guide your spiritual life.",
                views: 1500,
                tags: ["Learn", "Bible", "Verses"],
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                content: "In this section, you will find a collection of carefully selected Bible verses to reflect on, inspire, and strengthen your faith. Each verse has been chosen for its relevance to themes of hope, love, wisdom, and spiritual guidance. Whether for meditating on God's word or sharing with others, this space is designed to help you delve deeper into the Bible's message and apply it to your daily life.",
                link: "/bible_verses_section"
              },
              {
                id: 2,
                title: "Favorite Verses",
                description: "Find your favorite verses and keep learning from the word of God.",
                views: 1200,
                tags: ["CSS", "Frontend", "Tutorial"],
                image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                content: "Explora una selección de tus versículos favoritos para inspirarte y seguir aprendiendo de la palabra de Dios. Esta sección está diseñada para fortalecer tu fe, brindarte esperanza y guiarte en tu crecimiento espiritual, ayudándote a aplicar los mensajes bíblicos en tu vida diaria.",
                link: "/favorite_verses"
              }
        ];
        useEdutainmentSpy.mockReturnValue({
            edutainmentFilter: mockPosts,
        });
        render(
            <BrowserRouter>
                <DiscoverAndLearn />
            </BrowserRouter>
        );
        expect(screen.getByText("Bible Verses Section")).toBeInTheDocument();
    });
});