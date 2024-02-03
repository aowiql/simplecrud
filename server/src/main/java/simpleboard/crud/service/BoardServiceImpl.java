package simpleboard.crud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import simpleboard.crud.dao.BoardDAO;
import simpleboard.crud.entity.Board;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    private BoardDAO boardDAO;

    @Autowired
    public BoardServiceImpl(BoardDAO theBoardDAO) {
        boardDAO = theBoardDAO;
    }

    // 게시글 전체 조회
    @Override
    public List<Board> findAll() {
        return boardDAO.findAll();
    }

    // 글하나 탐색
    @Override
    public Board findById(int theId) {
        return boardDAO.findById(theId);
    }

    // 게시글 추가
    @Override
    @Transactional
    public Board addBoard(Board theBoard) {
        return boardDAO.addBoard(theBoard);
    }

    // 게시글 수정
    @Override
    @Transactional
    public Board updatePost(Long theId, Board thePost) {
        return boardDAO.updatePost(theId, thePost);
    }

    // 체크리스트
    @Override
    @Transactional
    public Board donePost(Long theId, Board thePost) {
        return boardDAO.donePost(theId, thePost);
    }
    
    // 삭제
    @Override
    @Transactional
    public void deletePost(int theId) {
        boardDAO.deletePost(theId);
    }
}
