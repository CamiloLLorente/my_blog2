import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Blog from "../../pages/blog/Blog";
import * as usePosts from "../../hook/post";
import userEvent from "@testing-library/user-event";

describe("Blog", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const usePostSpy = vi.spyOn(usePosts, "usePosts");
  it("should render the search component", () => {
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText("Buscar artículos...")
    ).toBeInTheDocument();
  });
  it("displays all posts initially", () => {
    const mockPosts = [
      {
        id: 1,
        title: "React Testing",
        description: "Vitest is great",
        tags: ["React"],
        date: "2024-02-05",
        image: "",
        views: 100,
        content: "Content of React Testing",
      },
      {
        id: 2,
        title: "Vue Basics",
        description: "Vue.js is awesome",
        tags: ["Vue"],
        date: "2024-02-04",
        image: "",
        views: 200,
        content: "Content of Vue Basics",
      },
    ];
    const setFilteredPosts = vi.fn();
    usePostSpy.mockReturnValue({
      posts: mockPosts,
      filteredPosts: mockPosts,
      setFilteredPosts,
    });
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    expect(screen.getByText("React Testing")).toBeInTheDocument();
    expect(screen.getByText("Vue Basics")).toBeInTheDocument();
  });

  it("filters posts based on search query", async () => {
    const mockPosts = [
      {
        id: 1,
        title: "React Testing",
        description: "Vitest is great",
        tags: ["React"],
        date: "2024-02-05",
        image: "",
        views: 100,
        content: "Content of React Testing",
      },
      {
        id: 2,
        title: "Vue Basics",
        description: "Vue.js is awesome",
        tags: ["Vue"],
        date: "2024-02-04",
        image: "",
        views: 200,
        content: "Content of Vue Basics",
      },
    ];

    const setFilteredPosts = vi.fn();
    usePostSpy.mockReturnValue({
      posts: mockPosts,
      filteredPosts: mockPosts,
      setFilteredPosts,
    });
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText("Buscar artículos...");
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "Vue" } });
    });
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(button);

    await waitFor(() => {
      expect(setFilteredPosts).toHaveBeenCalledWith([
        expect.objectContaining({
          id: 2,
          title: "Vue Basics",
          description: "Vue.js is awesome",
          tags: ["Vue"],
          date: "2024-02-04",
          image: "",
          views: 200,
          content: "Content of Vue Basics",
        }),
      ]);
    });
  });

  it("shows no posts when search query does not match", async() => {
    const mockPosts = [
      {
        id: 1,
        title: "React Testing",
        description: "Vitest is great",
        tags: ["React"],
        date: "2024-02-05",
        image: "",
        views: 100,
        content: "Content of React Testing",
      },
      {
        id: 2,
        title: "Vue Basics",
        description: "Vue.js is awesome",
        tags: ["Vue"],
        date: "2024-02-04",
        image: "",
        views: 200,
        content: "Content of Vue Basics",
      },
    ];

    const setFilteredPosts = vi.fn();
    usePostSpy.mockReturnValue({
      posts: mockPosts,
      filteredPosts: mockPosts,
      setFilteredPosts,
    });
    render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText("Buscar artículos...");
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "Angular" } });
    });
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(button);
    console.log(setFilteredPosts.mock.calls);
    expect(setFilteredPosts).toHaveBeenCalledWith([]);
  });


 
});
