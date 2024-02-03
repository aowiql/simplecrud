package simpleboard.crud.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import simpleboard.crud.entity.Board;
import simpleboard.crud.service.BoardService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BoardRestController {

    private BoardService boardService;

    @Autowired
    public BoardRestController(BoardService theBoardService) {
        boardService = theBoardService;
    }

    // 전체 조회
    @GetMapping("/lists")
    public List<Board> findAll() {
        return boardService.findAll();
    }

    // 게시글 작성
    @PostMapping("/addposts")
    public Board addPosts(@RequestBody Board thePost) {
        thePost.setId(0);

        Board addPosts = boardService.addBoard(thePost);

        return addPosts;
    }
}
