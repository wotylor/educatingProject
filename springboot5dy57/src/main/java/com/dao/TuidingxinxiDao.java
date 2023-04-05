package com.dao;

import com.entity.TuidingxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.TuidingxinxiVO;
import com.entity.view.TuidingxinxiView;


/**
 * 退订信息
 * 
 * @author 
 * @email 
 * @date 2022-05-02 13:22:57
 */
public interface TuidingxinxiDao extends BaseMapper<TuidingxinxiEntity> {
	
	List<TuidingxinxiVO> selectListVO(@Param("ew") Wrapper<TuidingxinxiEntity> wrapper);
	
	TuidingxinxiVO selectVO(@Param("ew") Wrapper<TuidingxinxiEntity> wrapper);
	
	List<TuidingxinxiView> selectListView(@Param("ew") Wrapper<TuidingxinxiEntity> wrapper);

	List<TuidingxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<TuidingxinxiEntity> wrapper);
	
	TuidingxinxiView selectView(@Param("ew") Wrapper<TuidingxinxiEntity> wrapper);
	

}
