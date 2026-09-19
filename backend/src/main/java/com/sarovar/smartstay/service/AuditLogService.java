package com.sarovar.smartstay.service;

import com.sarovar.smartstay.entity.AuditLog;
import com.sarovar.smartstay.repository.AuditLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class AuditLogService {

    @Autowired
    private AuditLogRepository auditLogRepository;

    @Async
    public void logAction(Long userId, String action, String entityType, Long entityId, String description, String ipAddress) {
        AuditLog log = new AuditLog();
        log.setUserId(userId);
        log.setAction(action);
        log.setEntityType(entityType);
        log.setEntityId(entityId);
        log.setDescription(description);
        log.setIpAddress(ipAddress);
        auditLogRepository.save(log);
    }
}
