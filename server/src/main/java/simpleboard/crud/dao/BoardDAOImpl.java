package simpleboard.crud.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import simpleboard.crud.entity.Board;

import java.util.List;

@Repository
public class BoardDAOImpl implements BoardDAO {

    private EntityManager entityManager;

    @Autowired
    public BoardDAOImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    // 게시글 조회
    @Override
    public List<Board> findAll() {
        TypedQuery<Board> theQuery =
                entityManager.createQuery("FROM Board", Board.class);

        List<Board> boards = theQuery.getResultList();

        return boards;
    }

    // 게시글 하나 조회
    @Override
    public Board findById(int theId) {
        Board theBoard = entityManager.find(Board.class, theId);

        return theBoard;
    }

    // 게시글 추가
    @Override
    @Transactional
    public Board addBoard(Board theBoard) {
        Board existingBoard = entityManager.merge(theBoard);
        return existingBoard;
    }


    // 게시글 수정
    @Override
    public Board updatePost(Long theId, Board thePost) {
        Board updateBoard = entityManager.find(Board.class, theId);

        if(updateBoard != null) {
            updateBoard.setBoardTitle(thePost.getBoardTitle()); // 제목 수정
            updateBoard.setBoardPost(thePost.getBoardPost());   // 본문 수정

            entityManager.merge(updateBoard);
        }
        return updateBoard;
    }

    @Override
    public Board donePost(Long theId, Board thePost) {
        Board donePost = entityManager.find(Board.class, theId);

        if(donePost != null) {
            donePost.setBoardDone(!donePost.isBoardDone());
        }

        return donePost;
    }

    // 삭제
    @Override
    public void deletePost(int theId) {
        Board deletePost = entityManager.find(Board.class, theId);

        entityManager.remove(deletePost);
    }
}
