package com.dao;

import com.entity.YudingxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.YudingxinxiVO;
import com.entity.view.YudingxinxiView;


/**
 * 预定信息
 * 
 * @author 
 * @email 
 * @date 2022-05-02 13:22:57
 */
public interface YudingxinxiDao extends BaseMapper<YudingxinxiEntity> {
	
	List<YudingxinxiVO> selectListVO(@Param("ew") Wrapper<YudingxinxiEntity> wrapper);
	
	YudingxinxiVO selectVO(@Param("ew") Wrapper<YudingxinxiEntity> wrapper);
	
	List<YudingxinxiView> selectListView(@Param("ew") Wrapper<YudingxinxiEntity> wrapper);

	List<YudingxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<YudingxinxiEntity> wrapper);
	
	YudingxinxiView selectView(@Param("ew") Wrapper<YudingxinxiEntity> wrapper);
	

}
