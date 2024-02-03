package simpleboard.crud.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
