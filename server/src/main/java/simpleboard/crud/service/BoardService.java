package simpleboard.crud.service;

import simpleboard.crud.entity.Board;

import java.util.List;

public interface BoardService {
    // 게시글 조회
    List<Board> findAll();

    // 하나 탐색
    Board findById(int theId);

    // 게시글 작성
    Board addBoard(Board theBoard);

    // 본문 수정
    Board updatePost(Long theId, Board thePost);

    // 체크
    Board donePost(Long theId, Board thePost);

    // 삭제
    void deletePost(int theId);

}
